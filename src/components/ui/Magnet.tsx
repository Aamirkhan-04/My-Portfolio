import { useRef, useState, type ReactNode } from "react";
import { useIsTouchDevice, useReducedMotion } from "@/hooks/useReducedMotion";

interface MagnetProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Mouse-following magnetic wrapper. Disabled on touch / reduced motion. */
export function Magnet({ children, strength = 0.25, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();
  const disabled = isTouch || reduced;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={() => setActive(true)}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: active
          ? "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)"
          : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export default Magnet;
