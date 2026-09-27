#!/usr/bin/env python3
"""HTTP-only QA for every public learning and assessment route in a production release."""
from __future__ import annotations

import concurrent.futures
import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

base = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "https://professor-citachka.vercel.app"
audit = json.loads(Path("public/curriculum-audit.json").read_text())
routes = {"/", "/manifest.webmanifest", "/curriculum-audit.json"}
for subject in audit["subjects"]:
    routes.add(f"/subjects/{subject['id']}")
    routes.update(subject["lessonRoutes"])
    routes.update(subject["extendedRoutes"])
    routes.update(item["route"] for item in subject["assessments"])


def check(route: str) -> dict[str, object]:
    url = f"{base}{route}"
    try:
        request = urllib.request.Request(url, headers={"User-Agent": "ProfessorCitachka-ProductionQA/1.0"})
        with urllib.request.urlopen(request, timeout=30) as response:
            body = response.read().decode("utf-8", errors="replace")
            status = response.status
        # Next includes generic not-found text in successful RSC boundary payloads;
        # the error-document root, not that text, distinguishes a real not-found page.
        error_marker = '<html id="__next_error__"' in body
        return {"route": route, "status": status, "bytes": len(body), "errorMarker": error_marker, "ok": status == 200 and not error_marker}
    except urllib.error.HTTPError as error:
        return {"route": route, "status": error.code, "bytes": 0, "errorMarker": True, "ok": False}
    except Exception as error:  # report rather than losing a route in an exception
        return {"route": route, "status": str(error), "bytes": 0, "errorMarker": True, "ok": False}

with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool:
    results = list(pool.map(check, sorted(routes)))
failed = [result for result in results if not result["ok"]]
report = {"base": base, "checked": len(results), "passed": len(results) - len(failed), "failed": failed}
Path("artifacts/pedagogy/production-route-readback.json").write_text(json.dumps(report, indent=2) + "\n")
print(json.dumps(report, indent=2))
raise SystemExit(1 if failed else 0)
