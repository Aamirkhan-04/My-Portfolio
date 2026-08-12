import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

function Row({ items, direction }: { items: string[]; direction: 1 | -1 }) {
  const list = [...items, ...items, ...items];
  return (
    <div className="flex w-max gap-3 sm:gap-5">
      {list.map((label, i) => (
        <div
          key={`${label}-${i}-${direction}`}
          className="flex h-24 w-[16rem] shrink-0 items-center justify-center rounded-2xl border border-foreground/10 bg-gradient-to-br from-[#16161b] to-[#0f0f13] px-6 sm:h-32 sm:w-[22rem]"
        >
          <span className="font-display text-lg font-bold uppercase tracking-tight text-foreground/70 sm:text-2xl">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-22%", "6%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["6%", "-22%"]);

  return (
    <section
      ref={ref}
      aria-label="Technologies I work with"
      className="relative overflow-hidden bg-background py-14 sm:py-20"
    >
      <motion.div style={{ x: x1, willChange: "transform" }}>
        <Row items={portfolioData.marquee} direction={1} />
      </motion.div>
      <motion.div className="mt-3 sm:mt-5" style={{ x: x2, willChange: "transform" }}>
        <Row items={[...portfolioData.marquee].reverse()} direction={-1} />
      </motion.div>
    </section>
  );
}

export default MarqueeSection;
