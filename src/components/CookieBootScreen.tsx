"use client";

import { useEffect } from "react";

/*
 * Takes the loading veil away once the page is genuinely usable.
 *
 * The veil itself is rendered by the server layout and hides on its own after a
 * fixed beat (see boot.css). This component only shortens that wait: it listens
 * for the page to finish loading and marks the veil as done. A minimum keeps the
 * cat from flickering past on a fast connection, and a safety timer means the
 * veil is dismissed even if the load event never arrives.
 */

const MINIMUM_VISIBLE_MS = 420;
const SAFETY_MS = 2200;
const VEIL_ID = "cookie-boot";

export function CookieBootScreen() {
  useEffect(() => {
    const veil = document.getElementById(VEIL_ID);
    if (!veil) return;

    let dismissed = false;
    const startedAt = Date.now();

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      const held = Date.now() - startedAt;
      const remaining = Math.max(0, MINIMUM_VISIBLE_MS - held);
      window.setTimeout(() => {
        /* The class starts the fade. It is not what removes the veil: a browser
           that runs no animations — and there are such browsers, and settings —
           would otherwise sit behind a cat forever. This is the guarantee. */
        veil.classList.add("boot-done");
        veil.style.display = "none";
      }, remaining);
    };

    const safety = window.setTimeout(dismiss, SAFETY_MS);
    if (document.readyState === "complete") dismiss();
    else window.addEventListener("load", dismiss, { once: true });

    return () => {
      window.clearTimeout(safety);
      window.removeEventListener("load", dismiss);
    };
  }, []);

  return null;
}
