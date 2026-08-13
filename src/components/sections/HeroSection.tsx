import { Suspense, lazy, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Portrait3D } from "@/components/ui/Portrait3D";
import { ContactButton } from "@/components/ui/ContactButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroCanvas = lazy(() =>
  import("@/components/three/HeroCanvas").then((m) => ({ default: m.HeroCanvas })),
);

function RoleRotator() {
  const [i, setI] = useState(1);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(
      () => setI((p) => (p + 1) % portfolioData.roles.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className="relative h-6 overflow-hidden" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={portfolioData.roles[i]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 block text-center text-[0.7rem] uppercase tracking-[0.28em] text-accent-violet sm:text-sm"
        >
          {portfolioData.roles[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-background pb-8 pt-24 sm:pb-12"
    >
      {/* CSS fallback / atmosphere behind the 3D layer */}
      <div className="hero-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {mounted && (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        )}
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col items-center justify-center px-5 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient-heading text-center font-display font-black uppercase leading-[0.82] tracking-tight"
          style={{ fontSize: "clamp(3rem, 15vw, 15rem)" }}
        >
          {portfolioData.heroHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-3 text-center text-[0.7rem] uppercase tracking-[0.32em] text-foreground/60 sm:text-sm"
        >
          {portfolioData.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 mt-4 w-full max-w-md"
        >
          <RoleRotator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-2 sm:mt-4"
        >
          <Portrait3D />
        </motion.div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-sm text-sm leading-relaxed text-foreground/60"
        >
          {portfolioData.introText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center gap-3"
        >
          <ContactButton href={portfolioData.resumePath} download>
            <Download
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
            Download Resume
          </ContactButton>
          <ContactButton href="#contact" variant="ghost">
            Let&apos;s Talk
            <ArrowDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </ContactButton>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
