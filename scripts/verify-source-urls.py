#!/usr/bin/env python3
"""HTTP-check every reading URL cited across the authored course packs.

Three separate hazards have each produced a false "broken source" in this project,
so the checker guards against all three:

1. Bot-walls that answer automated clients with a misleading status (a 403 or even a
   405/200 stub) while serving real content to a browser user-agent.
2. Transient TLS/socket failures under a thread pool, which are far more common than
   genuinely dead hosts and must be retried before being reported.
3. Hosts that omit the intermediate certificate. Browsers and curl fetch the missing
   link through the AIA extension; Python's ssl module does not, so urlopen raises
   CERTIFICATE_VERIFY_FAILED on a source that loads perfectly in a browser. Those are
   re-checked with the system curl, with verification still ON.

A genuine problem with a source and a limitation of the checker look identical unless
the checker distinguishes them, which is what the fallbacks below are for.
"""
from __future__ import annotations

import concurrent.futures
import glob
import json
import subprocess
import time
import urllib.error
import urllib.request

BROWSER_UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
)

urls: set[str] = set()
for path in glob.glob("src/lib/course-packs/*.json"):
    pack = json.load(open(path, encoding="utf-8"))
    for level in pack.get("levels", []):
        for unit in level.get("units", []):
            for lesson in unit.get("lessons", []):
                for reading in lesson.get("readings", []):
                    urls.add(reading["url"])


def curl_status(url: str) -> object:
    """Re-check with the system curl, which completes incomplete certificate chains.

    Verification stays on. `-k` would turn a genuinely broken certificate into a
    false pass, which is exactly the kind of clean-looking result this script exists
    to avoid.
    """
    try:
        completed = subprocess.run(
            [
                "curl", "-sS", "-o", "/dev/null", "-w", "%{http_code}",
                "--max-time", "40", "-A", BROWSER_UA, url,
            ],
            capture_output=True,
            text=True,
            timeout=90,
        )
        code = completed.stdout.strip()
        if code.isdigit():
            return int(code)
        return f"ERR curl-{completed.returncode}"
    except Exception as error:
        return f"ERR {type(error).__name__}"


def check(url: str) -> tuple[str, object]:
    # A browser user-agent, because several publishers answer automated clients with a
    # misleading status instead of a bot-block: openmusictheory/Pressbooks returns 403 to
    # a plain curl agent, and nia.nih.gov returns 405 (Method Not Allowed) to any
    # non-browser agent on a plain GET. Both serve real content to a browser agent, so a
    # non-browser check reports working sources as broken and buries the real dead links.
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": BROWSER_UA,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
    )

    last: Exception | None = None
    for attempt in range(3):
        if attempt:
            time.sleep(1.5 * attempt)
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return url, response.status
        except urllib.error.HTTPError as error:
            # A response came back, so this is a real answer about the source: a 403 or
            # 404 from the publisher, not a problem with the check itself.
            return url, error.code
        except Exception as error:
            last = error
            message = str(error)
            if "CERTIFICATE_VERIFY_FAILED" in message or "certificate verify failed" in message:
                # The host's chain is incomplete. Retrying cannot fix that, so hand the
                # fetch to curl, which resolves the chain the way a browser does.
                return url, curl_status(url)

    return url, f"ERR {type(last).__name__}"


with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    results = sorted(pool.map(check, sorted(urls)))

bad = [(url, status) for url, status in results if not isinstance(status, int) or status >= 400]
blocked = [(url, status) for url, status in bad if status == 403]
other = [(url, status) for url, status in bad if status != 403]

print(f"unique source URLs: {len(results)}")
print(f"non-200: {len(bad)}  (403 bot-walls: {len(blocked)}, everything else: {len(other)})")
for url, status in bad:
    print(f"  {status}  {url}")
raise SystemExit(1 if bad else 0)
