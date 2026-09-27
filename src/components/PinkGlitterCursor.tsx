"use client";

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

export function PinkGlitterCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const nextId = useRef(0);
  const previous = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isEnabled = () => finePointer.matches && !reducedMotion.matches && document.documentElement.dataset.motion !== 'calm';
    const updateEnabled = () => {setEnabled(isEnabled());setPosition({x:-100,y:-100});setSparkles([]);};
    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);
    window.addEventListener('citachka-atmosphere-change',updateEnabled);

    const onMove = (event: PointerEvent) => {
      if (!isEnabled()) return;
      const x = event.clientX;
      const y = event.clientY;
      const distance = Math.hypot(x - previous.current.x, y - previous.current.y);
      setPosition({ x, y });

      if (distance > 5) {
        previous.current = { x, y };
        const fresh = Array.from({ length: 7 }, (_, index) => ({
          id: nextId.current++,
          x: x + (Math.random() - 0.5) * 15,
          y: y + (Math.random() - 0.5) * 15,
          size: 3 + Math.random() * 7,
          driftX: (Math.random() - 0.5) * 58,
          driftY: (Math.random() - 0.5) * 58,
          delay: index * 18,
        }));
        setSparkles((current) => [...current.slice(-105), ...fresh]);
      }
    };

    const onLeave = () => setPosition({ x: -100, y: -100 });
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
      window.removeEventListener('citachka-atmosphere-change',updateEnabled);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pink-glitter-cursor" data-active={position.x >= 0 && position.y >= 0} aria-hidden="true">
      {sparkles.map((sparkle) => (
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
      <span className="pink-cursor-star" style={{ left: position.x, top: position.y }}>✦</span>
    </div>
  );
}
