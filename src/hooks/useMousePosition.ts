import { useEffect, useState } from "react";

/** Normalized pointer position in the range [-1, 1] relative to viewport center. */
export function useMousePosition(enabled = true) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  return pos;
}
