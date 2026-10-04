#!/usr/bin/env python3
"""Build a self-contained preview of the homepage from the real build output.

This is not a mock-up: it stitches the stylesheet the site actually ships to the
markup the site actually generates, so what you see is what deployed. Nothing is
invented, and nothing is served locally — the result is a single static file.

The preview sets data-motion="lively" so the louder animation layer is visible.
The deployed site defaults to "calm", where the movement is slower and softer.

Usage:
    python3 scripts/make-homepage-preview.py [--motion lively|calm] [--out FILE]
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

BUILD = pathlib.Path(".next/server/app/index.html")
CSS_DIR = pathlib.Path(".next/static/css")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--motion", default="lively", choices=["lively", "calm"])
    parser.add_argument("--out", default="/tmp/homepage-preview.html")
    args = parser.parse_args()

    if not BUILD.exists():
        print(f"no build at {BUILD} — run `npm run build` first")
        return 1

    html = BUILD.read_text(encoding="utf-8")

    # Stylesheets, in the order the page loads them.
    hrefs = re.findall(r'href="(/_next/static/css/[^"]+\.css)"', html)
    css_parts = []
    for href in hrefs:
        path = pathlib.Path(".next/static/css") / pathlib.Path(href).name
        if path.exists():
            css_parts.append(f"/* {path.name} */\n{path.read_text(encoding='utf-8')}")
    if not css_parts:
        print(f"no stylesheets found next to {BUILD}")
        return 1

    # The real body markup, with Next's scripts stripped so nothing boots.
    body = re.search(r"<body[^>]*>(.*?)</body>", html, re.S)
    if not body:
        print("could not find a <body> in the build output")
        return 1
    markup = re.sub(r"<script\b.*?</script>", "", body.group(1), flags=re.S)

    page = f"""<!DOCTYPE html>
<html lang="en" data-motion="{args.motion}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Keep pixel-art assets resolving to the deployed site when this preview opens as a file. -->
<base href="https://cookieheaven.art/">
<title>Homepage preview — cookieheaven.art</title>
<style>
{chr(10).join(css_parts)}
/* Preview-only: the real page inherits its base colour from the site body. */
html, body {{ margin: 0; background: #1a0410; }}
</style>
</head>
<body>
{markup}
</body>
</html>
"""

    out = pathlib.Path(args.out)
    out.write_text(page, encoding="utf-8")
    print(f"wrote {out} ({out.stat().st_size:,} bytes, {len(css_parts)} stylesheets, motion={args.motion})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
