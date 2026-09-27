#!/usr/bin/env python3
"""HTTP-check every reading URL cited across the authored course packs."""
from __future__ import annotations

import concurrent.futures
import glob
import json
import urllib.error
import urllib.request

urls: set[str] = set()
for path in glob.glob("src/lib/course-packs/*.json"):
    pack = json.load(open(path, encoding="utf-8"))
    for level in pack.get("levels", []):
        for unit in level.get("units", []):
            for lesson in unit.get("lessons", []):
                for reading in lesson.get("readings", []):
                    urls.add(reading["url"])


def check(url: str) -> tuple[str, object]:
    # Use a browser user-agent. Several publishers answer automated clients with a
    # misleading status instead of a bot-block: openmusictheory/Pressbooks returns 403 to
    # a plain curl agent, and nia.nih.gov returns 405 (Method Not Allowed) to any
    # non-browser agent on a plain GET. Both serve real content to a browser agent, so a
    # non-browser check reports working sources as broken and buries the real dead links.
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
            ),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            return url, response.status
    except urllib.error.HTTPError as error:
        return url, error.code
    except Exception as error:
        return url, f"ERR {type(error).__name__}"


with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    results = sorted(pool.map(check, sorted(urls)))

bad = [(url, status) for url, status in results if not isinstance(status, int) or status >= 400]
print(f"unique source URLs: {len(results)}")
print(f"non-200: {len(bad)}")
for url, status in bad:
    print(f"  {status}  {url}")
raise SystemExit(1 if bad else 0)
