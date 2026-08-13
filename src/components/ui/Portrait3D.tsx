import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useIsTouchDevice, useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Layered holographic portrait.
 * Subtle 3-5 degree pointer tilt only — the image never translates or chases the cursor.
 */
export function Portrait3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();
  const disabled = isTouch || reduced;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateY = useTransform(sx, [-1, 1], [-4.5, 4.5]);
  const rotateX = useTransform(sy, [-1, 1], [4.5, -4.5]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set(Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2))));
    py.set(Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2))));
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative mx-auto h-[15rem] w-[15rem] sm:h-[22rem] sm:w-[22rem]"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="portrait-float relative h-full w-full"
      >
        {/* depth halo */}
        <div className="portrait-glow" aria-hidden="true" />
        <div className="portrait-halo" aria-hidden="true" />

        {/* rotating holographic rings */}
        <div className="portrait-ring portrait-ring-spin" aria-hidden="true" />
        <div className="portrait-ring-inner portrait-ring-spin-reverse" aria-hidden="true" />

        {/* orbiting particles */}
        <div className="portrait-orbit" aria-hidden="true">
          <span className="portrait-dot portrait-dot-a" />
          <span className="portrait-dot portrait-dot-b" />
          <span className="portrait-dot portrait-dot-c" />
        </div>

        {/* glass disc behind portrait */}
        <div className="portrait-glass" aria-hidden="true" />

        <img
          src="/images/profile.png"
          alt={`Portrait of ${portfolioData.name}, ${portfolioData.title}`}
          width={800}
          height={800}
          className="portrait-image relative z-10 h-[13rem] w-[13rem] translate-x-[1rem] translate-y-[1rem] rounded-full object-cover object-top ring-1 ring-foreground/15 sm:h-[19rem] sm:w-[19rem] sm:translate-x-[1.5rem] sm:translate-y-[1.5rem]"
        />
      </motion.div>
    </div>
  );
}

export default Portrait3D;
