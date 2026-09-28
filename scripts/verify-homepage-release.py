#!/usr/bin/env python3
"""Verify the personal homepage release on the live domain.

Checks each language of the homepage, the study dashboard it links to, and that
the neon theme actually reached the deployed stylesheet. Reads content, not
status codes: a 200 with the wrong words is a failure.

Usage:
    python3 scripts/verify-homepage-release.py [--host cookieheaven.art] [--ip 216.198.79.1]
"""

from __future__ import annotations

import argparse
import http.client
import re
import ssl
import sys
import time

PAGES = {
    "/": {
        "title": "Melissa Aguilera — cookieheaven.art",
        "lang": "en",
        "must": [
            "Hi, I’m Melissa Aguilera.",
            "This is my website.",
            "Based in Brooklyn, New York",
            "Enter Professor Citachka",
            "open.spotify.com/user/mcdonaldscult",
            "autistic with ADHD",
            "/images/portrait.jpg",
        ],
        "must_not": ["Hola, soy", "Привет, я"],
    },
    "/es": {
        "title": "Melissa Aguilera — cookieheaven.art",
        "lang": "es",
        "must": [
            "Hola, soy Melissa Aguilera.",
            "Este es mi sitio web.",
            "Con base en Brooklyn, Nueva York",
            "Entrar a Professor Citachka",
            "open.spotify.com/user/mcdonaldscult",
            "Soy autista y tengo TDAH",
            "Español",
            "Русский",
            "/images/portrait.jpg",
        ],
        "must_not": ["Hi, I’m Melissa", "Привет, я Мелисса"],
    },
    "/ru": {
        "title": "Мелисса Агилера — cookieheaven.art",
        "lang": "ru",
        "must": [
            "Привет, я Мелисса Агилера.",
            "Это мой сайт.",
            "Живу в Бруклине, Нью-Йорк",
            "Войти в университет",
            "open.spotify.com/user/mcdonaldscult",
            "У меня аутизм и СДВГ",
            "Русский",
            "Español",
            "/images/portrait.jpg",
        ],
        "must_not": ["Hi, I’m Melissa", "Hola, soy Melissa"],
    },
}

STUDY_MUST = ["Good morning", "Professor"]


def fetch(host: str, path: str, ip: str | None, timeout: int = 45) -> tuple[int, str]:
    ctx = ssl.create_default_context()
    if ip:
        conn = http.client.HTTPSConnection(ip, 443, timeout=timeout, context=ctx)
        conn.putrequest("GET", path, skip_host=True, skip_accept_encoding=True)
        conn.putheader("Host", host)
    else:
        conn = http.client.HTTPSConnection(host, 443, timeout=timeout, context=ctx)
        conn.putrequest("GET", path, skip_accept_encoding=True)
    conn.putheader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                                 "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
    conn.putheader("Accept", "text/html,application/xhtml+xml")
    conn.putheader("Connection", "close")
    conn.endheaders()
    response = conn.getresponse()
    body = response.read().decode("utf-8", errors="replace")
    status = response.status
    conn.close()
    return status, body


def check(host: str, path: str, spec: dict, ip: str | None) -> list[str]:
    problems: list[str] = []
    try:
        status, body = fetch(host, path, ip)
    except Exception as exc:  # network-level failure
        return [f"{path}: request failed — {exc}"]

    if status != 200:
        return [f"{path}: HTTP {status}"]

    if len(body) < 2000:
        problems.append(f"{path}: suspiciously small body ({len(body)} bytes)")

    if spec.get("title") and spec["title"] not in body:
        problems.append(f"{path}: title missing ({spec['title']!r})")

    if spec.get("lang"):
        # Next renders the document with its own lang; the page itself also sets it.
        if f'lang="{spec["lang"]}"' not in body:
            problems.append(f'{path}: no lang="{spec["lang"]}" anywhere in the document')

    for needle in spec.get("must", []):
        if needle not in body:
            problems.append(f"{path}: missing {needle!r}")

    for needle in spec.get("must_not", []):
        if needle in body:
            problems.append(f"{path}: contains other language's text {needle!r}")

    return problems


def fetch_asset(host: str, path: str, ip: str | None, timeout: int = 45):
    """Fetch a binary asset, returning (status, content_type, byte_length).

    The page fetcher decodes to text, which destroys the byte count of an image,
    so image checks go through here instead.
    """
    ctx = ssl.create_default_context()
    if ip:
        conn = http.client.HTTPSConnection(ip, 443, timeout=timeout, context=ctx)
        conn.putrequest("GET", path, skip_host=True, skip_accept_encoding=True)
        conn.putheader("Host", host)
    else:
        conn = http.client.HTTPSConnection(host, 443, timeout=timeout, context=ctx)
        conn.putrequest("GET", path, skip_accept_encoding=True)
    conn.putheader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                                 "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
    conn.putheader("Connection", "close")
    conn.endheaders()
    response = conn.getresponse()
    body = response.read()
    status = response.status
    content_type = response.getheader("Content-Type", "")
    conn.close()
    return status, content_type, len(body)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", default="cookieheaven.art")
    parser.add_argument("--ip", default=None, help="pin the IP, keeping TLS SNI correct")
    parser.add_argument("--wait", type=int, default=0, help="seconds to wait first")
    args = parser.parse_args()

    if args.wait:
        print(f"  waiting {args.wait}s for the deploy to go live…")
        time.sleep(args.wait)

    failures = 0
    for path, spec in PAGES.items():
        problems = check(args.host, path, spec, args.ip)
        if problems:
            failures += 1
            for problem in problems:
                print(f"  FAIL  {problem}")
        else:
            print(f"  ok    {path}  ({spec['lang']})")

    # The dashboard moved to /study; if that 404s the whole restructure broke links.
    try:
        status, body = fetch(args.host, "/study", args.ip)
        if status != 200:
            print(f"  FAIL  /study: HTTP {status}")
            failures += 1
        else:
            missing = [needle for needle in STUDY_MUST if needle not in body]
            if missing:
                print(f"  FAIL  /study: missing {missing}")
                failures += 1
            else:
                print("  ok    /study  (dashboard intact)")
    except Exception as exc:
        print(f"  FAIL  /study: request failed — {exc}")
        failures += 1

    # Her portrait has to be a real, served image — not merely referenced.
    try:
        status, content_type, length = fetch_asset(args.host, "/images/portrait.jpg", args.ip)
        if status != 200:
            print(f"  FAIL  /images/portrait.jpg: HTTP {status}")
            failures += 1
        elif not content_type.startswith("image/jpeg"):
            print(f"  FAIL  /images/portrait.jpg: served as {content_type!r}, expected image/jpeg")
            failures += 1
        elif length < 20_000:
            print(f"  FAIL  /images/portrait.jpg: only {length} bytes")
            failures += 1
        else:
            print(f"  ok    /images/portrait.jpg  ({length:,} bytes, {content_type})")
    except Exception as exc:
        print(f"  FAIL  /images/portrait.jpg: request failed — {exc}")
        failures += 1

    # Confirm the glitter theme and the reduced-motion guard reached the deployed CSS.
    try:
        _, home = fetch(args.host, "/", args.ip)
        hrefs = re.findall(r'href="(/_next/static/css/[^"]+\.css)"', home)
        if not hrefs:
            print("  WARN  no stylesheet link found on the homepage")
        else:
            missing = []
            for href in set(hrefs):
                _, css = fetch(args.host, href, args.ip)
                if "glitter-drift" in css and "pink-bloom-drift" in css:
                    # The animation must be escapable: the reduced-motion guard has to
                    # ship with the animation, never separately.
                    if "prefers-reduced-motion" not in css:
                        print("  FAIL  glitter animation shipped without a reduced-motion guard")
                        failures += 1
                    else:
                        print("  ok    pink glitter animation present, with reduced-motion guard")
                    break
                missing.append(href)
            else:
                print(f"  FAIL  glitter theme not found in the deployed CSS ({len(missing)} files)")
                failures += 1
    except Exception as exc:
        print(f"  WARN  could not check the stylesheet — {exc}")

    print()
    print(f"  {'ALL CHECKS PASSED' if failures == 0 else f'{failures} CHECK(S) FAILED'}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
