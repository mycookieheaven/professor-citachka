#!/usr/bin/env python3
"""Wait for the newest Vercel deployment to reach READY.

Deploys of this site build ~1200 routes, so a push is not live the moment it is
pushed. Polling here is what stops a verification sweep from being run against a
half-built deployment and reporting hundreds of phantom 404s.

The API token is read from the Vercel CLI's own auth store and is never printed.

Usage:
    python3 scripts/wait-for-deploy.py [--sha 3729c83] [--timeout 900]
"""

import argparse
import json
import os
import pathlib
import sys
import time
import urllib.request

AUTH = pathlib.Path.home() / "Library" / "Application Support" / "com.vercel.cli" / "auth.json"


def read_json(path: pathlib.Path) -> dict:
    try:
        return json.loads(path.read_text())
    except Exception as exc:
        raise SystemExit(f"could not read {path}: {exc}")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sha", default=None, help="wait for this commit specifically")
    parser.add_argument("--timeout", type=int, default=900)
    args = parser.parse_args()

    if not AUTH.exists():
        raise SystemExit(f"no Vercel credentials at {AUTH} — run `vercel login` first")
    token = read_json(AUTH).get("token")
    if not token:
        raise SystemExit("Vercel credentials present but no token inside — run `vercel login`")

    project = read_json(pathlib.Path(".vercel/project.json"))
    project_id, org_id = project["projectId"], project["orgId"]

    deadline = time.time() + args.timeout
    last = None
    while time.time() < deadline:
        url = (
            f"https://api.vercel.com/v6/deployments?projectId={project_id}"
            f"&teamId={org_id}&limit=5"
        )
        request = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
        with urllib.request.urlopen(request, timeout=30) as response:
            payload = json.loads(response.read().decode())

        deployments = payload.get("deployments", [])
        if not deployments:
            print("  no deployments found yet")
            time.sleep(20)
            continue

        newest = deployments[0]
        sha = (newest.get("meta") or {}).get("githubCommitSha", "")[:7]
        state = newest.get("state", "unknown")

        if args.sha:
            # Find the deployment for the commit we care about, not merely the newest.
            match = next(
                (d for d in deployments
                 if (d.get("meta") or {}).get("githubCommitSha", "").startswith(args.sha)),
                None,
            )
            if match is None:
                print(f"  waiting for a deployment of {args.sha} to appear…")
                time.sleep(20)
                continue
            newest, sha, state = match, args.sha, match.get("state", "unknown")

        if state != last:
            print(f"  {sha or 'unknown'} → {state}")
            last = state

        if state == "READY":
            print(f"  deployment {sha} is READY (target: {newest.get('target', 'n/a')})")
            return 0
        if state in ("ERROR", "CANCELED"):
            print(f"  deployment {sha} ended in {state} — build failure")
            return 1

        time.sleep(20)

    print("  timed out waiting for the deployment")
    return 1


if __name__ == "__main__":
    sys.exit(main())
