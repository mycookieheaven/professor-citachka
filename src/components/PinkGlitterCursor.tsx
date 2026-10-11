"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  driftX: number;
  driftY: number;
  delay: number;
};

/*
 * The cursor.
 *
 * This follows the pointer, and on this site it is not decoration bolted on: the
 * native cursor is switched off for fine pointers, so whatever this does is what
 * the mouse feels like. That makes its cost the whole game.
 *
 * It used to write React state on every pointermove, which meant a render per
 * mouse event, and it positioned itself with `left`/`top`, which is a layout write
 * per event. Both were unnecessary and both were felt: the pointer trailed the
 * Now the position lives in a ref, the element is moved with a composited
 * `translate3d` — never `left`/`top`, which is a layout write — and React renders
 * only when the cursor appears or disappears, or when a sparkle joins or leaves.
 *
 * Off the homepage the trail is kept as it was, with its own sparkle state.
 */

const OFFSETS = {
  cookie: "translate(-12%, -12%)",
  star: "translate(-48%, -52%)",
};

export function PinkGlitterCursor() {
  const pathname = usePathname();
  const isCookieheaven = pathname === "/" || pathname === "/es" || pathname === "/ru";
  const [enabled, setEnabled] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<HTMLSpanElement | null>(null);
  const pointer = useRef({ x: -100, y: -100 });
  const previous = useRef({ x: -100, y: -100 });
  const nextId = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isEnabled = () => finePointer.matches && !reducedMotion.matches && (isCookieheaven || document.documentElement.dataset.motion !== "calm");

    /** Writes the position straight to the DOM: no React render, no layout pass.
        One style write per pointer event is free — the browser coalesces style and
        paint to one per frame regardless — whereas a render per event was not. */
    const apply = () => {
      const node = markerRef.current;
      const root = rootRef.current;
      if (!node || !root) return;
      const { x, y } = pointer.current;
      const offset = isCookieheaven ? OFFSETS.cookie : OFFSETS.star;
      node.style.transform = `translate3d(${x}px, ${y}px, 0) ${offset}`;
      root.dataset.active = String(x >= 0 && y >= 0);
    };

    const updateEnabled = () => {
      setEnabled(isEnabled());
      pointer.current = { x: -100, y: -100 };
      previous.current = { x: -100, y: -100 };
      setSparkles([]);
      apply();
    };
    updateEnabled();

    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);
    window.addEventListener("citachka-atmosphere-change", updateEnabled);

    const onMove = (event: PointerEvent) => {
      if (!isEnabled()) return;
      pointer.current = { x: event.clientX, y: event.clientY };
      apply();
      if (isCookieheaven) return;
      const distance = Math.hypot(event.clientX - previous.current.x, event.clientY - previous.current.y);
      if (distance > 5) {
        previous.current = { x: event.clientX, y: event.clientY };
        const fresh = Array.from({ length: 7 }, (_, index) => ({
          id: nextId.current++,
          x: event.clientX + (Math.random() - 0.5) * 15,
          y: event.clientY + (Math.random() - 0.5) * 15,
          size: 3 + Math.random() * 7,
          driftX: (Math.random() - 0.5) * 58,
          driftY: (Math.random() - 0.5) * 58,
          delay: index * 18,
        }));
        setSparkles((current) => [...current.slice(-105), ...fresh]);
      }
    };

    const onLeave = () => {
      pointer.current = { x: -100, y: -100 };
      apply();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
      window.removeEventListener("citachka-atmosphere-change", updateEnabled);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [isCookieheaven]);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className={`pink-glitter-cursor${isCookieheaven ? " pixel-cookie-cursor" : ""}`} data-active="false" aria-hidden="true">
      {isCookieheaven ? null : sparkles.map((sparkle) => (
        <i
          className="pink-cursor-sparkle"
          key={sparkle.id}
          onAnimationEnd={() => setSparkles((current) => current.filter((item) => item.id !== sparkle.id))}
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}ms`,
            "--drift-x": `${sparkle.driftX}px`,
            "--drift-y": `${sparkle.driftY}px`,
          } as React.CSSProperties}
        />
      ))}
      <span
        ref={markerRef}
        className={isCookieheaven ? "pixel-cursor-cookie" : "pink-cursor-star"}
        style={{ transform: `translate3d(-100px, -100px, 0) ${isCookieheaven ? OFFSETS.cookie : OFFSETS.star}` }}
      >
        {isCookieheaven ? null : "✦"}
      </span>
    </div>
  );
}
