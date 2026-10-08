import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Coffee, Database, Layout, Leaf, Wrench } from "lucide-react";

import { TechTag } from "@/components/ui/TechTag";
import {
  useIsTouchDevice,
  useReducedMotion,
} from "@/hooks/useReducedMotion";
import type { SkillGroup } from "@/types/portfolio";

const icons = {
  java: Coffee,
  spring: Leaf,
  database: Database,
  frontend: Layout,
  tools: Wrench,
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function SkillCard({
  skill,
  delay = 0,
}: {
  skill: SkillGroup;
  delay?: number;
}) {
  const Icon = icons[skill.icon];

  const ref = useRef<HTMLDivElement>(null);

  const isTouch = useIsTouchDevice();
  const reduced = useReducedMotion();

  const disabled = isTouch || reduced;

  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const sx = useSpring(px, {
    stiffness: 140,
    damping: 20,
  });

  const sy = useSpring(py, {
    stiffness: 140,
    damping: 20,
  });

  const rotateY = useTransform(sx, [-1, 1], [-4, 4]);
  const rotateX = useTransform(sy, [-1, 1], [4, -4]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;

    const r = ref.current.getBoundingClientRect();

    px.set(
      (e.clientX - (r.left + r.width / 2)) /
        (r.width / 2)
    );

    py.set(
      (e.clientY - (r.top + r.height / 2)) /
        (r.height / 2)
    );
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease,
      }}
      whileHover={{
        y: -6,
      }}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <motion.article
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="skill-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6 backdrop-blur-md transition-colors duration-300 hover:border-accent-violet/50 sm:p-8"
      >
        {/* Existing background effects */}
        <span
          className="skill-card-sheen"
          aria-hidden="true"
        />

        <span
          className="skill-card-corner"
          aria-hidden="true"
        />

        {/* Icon + Category */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <span className="skill-icon flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/12 bg-foreground/[0.05] text-accent-violet transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-6">
            <Icon
              className="h-5 w-5"
              aria-hidden="true"
            />
          </span>

          <span className="text-[0.6rem] uppercase tracking-[0.24em] text-foreground/45">
            {skill.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative z-10 mt-6 font-display text-xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-2xl">
          {skill.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 mt-3 text-sm leading-relaxed text-foreground/60">
          {skill.description}
        </p>

        {/* Tags */}
        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <TechTag
              key={tag}
              label={tag}
            />
          ))}
        </div>

        {/* Animated Progress Bar */}
        <div className="relative z-10 mt-7">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-foreground/45">
              Proficiency
            </span>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: delay + 0.7,
              }}
              className="font-display text-xs font-semibold text-accent-violet"
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Track */}
          <div className="relative h-2 overflow-hidden rounded-full bg-foreground/10">
            {/* Animated Fill */}
            <motion.div
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: `${skill.level}%`,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 1.3,
                delay: delay + 0.2,
                ease,
              }}
              className="relative h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 shadow-[0_0_18px_rgba(139,92,246,0.55)]"
            >
              {/* Moving shine */}
              <motion.span
                initial={{
                  x: "-120%",
                }}
                whileInView={{
                  x: "220%",
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.4,
                  delay: delay + 0.5,
                  ease: "easeOut",
                }}
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>

        {/* Index */}
        <span
          className="relative z-10 mt-6 font-display text-[0.7rem] tracking-[0.3em] text-foreground/25"
          aria-hidden="true"
        >
          {skill.index}
        </span>
      </motion.article>
    </motion.div>
  );
}

export default SkillCard;