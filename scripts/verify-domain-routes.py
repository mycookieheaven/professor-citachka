#!/usr/bin/env python3
"""Route QA against a custom domain, optionally pinned to a known IP.

Why this exists: the system stub resolver can hold a negative cache entry for a
domain that was registered minutes ago, so urllib reports "nodename nor servname
provided" for every route while `dig` resolves the name fine. Pinning the IP here
keeps TLS SNI and the Host header correct, so the sweep tests the real domain
through its real certificate rather than a JSON placeholder.

Usage:
  verify-domain-routes.py https://cookieheaven.art [--ip 216.198.79.1]
"""
from __future__ import annotations

import argparse
import concurrent.futures
import http.client
import json
import socket
import ssl
import sys
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("base")
parser.add_argument("--ip", default=None, help="IP to connect to, keeping SNI/Host as the domain")
parser.add_argument("--out", default="artifacts/pedagogy/domain-route-readback.json")
args = parser.parse_args()

base = args.base.rstrip("/")
host = base.split("://", 1)[1].split("/", 1)[0]
use_tls = base.startswith("https://")
audit = json.loads(Path("public/curriculum-audit.json").read_text())

routes = {"/", "/manifest.webmanifest", "/curriculum-audit.json"}
for subject in audit["subjects"]:
    routes.add(f"/subjects/{subject['id']}")
    routes.update(subject["lessonRoutes"])
    routes.update(subject["extendedRoutes"])
    routes.update(item["route"] for item in subject["assessments"])

context = ssl.create_default_context()


class PinnedHTTPSConnection(http.client.HTTPSConnection):
    """Connect to a fixed IP but negotiate against the real hostname."""

    def __init__(self, hostname: str, ip: str, **kwargs):
        super().__init__(hostname, **kwargs)
        self._ip = ip

    def connect(self):  # type: ignore[override]
        sock = socket.create_connection((self._ip, self.port), self.timeout)
        self.sock = self._wrap(sock)

    def _wrap(self, sock):
        return self._context.wrap_socket(sock, server_hostname=self.host)


def check(route: str) -> dict[str, object]:
    try:
        connection = None
        try:
            if use_tls and args.ip:
                connection = PinnedHTTPSConnection(host, args.ip, timeout=30, context=context)
            elif use_tls:
                connection = http.client.HTTPSConnection(host, timeout=30, context=context)
            else:
                connection = http.client.HTTPConnection(host, timeout=30)
            connection.request("GET", route, headers={"User-Agent": "ProfessorCitachka-ProductionQA/1.0"})
            response = connection.getresponse()
            body = response.read().decode("utf-8", errors="replace")
            status = response.status
        finally:
            if connection is not None:
                connection.close()
        error_marker = '<html id="__next_error__"' in body
        return {
            "route": route,
            "status": status,
            "bytes": len(body),
            "errorMarker": error_marker,
            "ok": status == 200 and not error_marker,
        }
    except Exception as error:
        return {"route": route, "status": str(error), "bytes": 0, "errorMarker": True, "ok": False}


with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
    results = list(pool.map(check, sorted(routes)))

failed = [r for r in results if not r["ok"]]
report = {
    "base": base,
    "connectedIp": args.ip,
    "host": host,
    "checked": len(results),
    "passed": len(results) - len(failed),
    "failed": failed,
}
Path(args.out).parent.mkdir(parents=True, exist_ok=True)
Path(args.out).write_text(json.dumps(report, indent=2) + "\n")
print(f"  base:    {base}")
print(f"  ip:      {args.ip or '(system resolver)'}")
print(f"  checked: {report['checked']}  passed: {report['passed']}  failed: {len(failed)}")
for item in failed[:15]:
    print(f"   FAIL {item['route']} -> {item['status']}")
sys.exit(1 if failed else 0)
