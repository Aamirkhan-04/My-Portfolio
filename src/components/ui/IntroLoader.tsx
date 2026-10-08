import { motion } from "framer-motion";

type IntroLoaderProps = {
  onComplete: () => void;
};

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        delay: 2,
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0C0C0C]"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]"
        aria-hidden="true"
      />

      {/* Name */}
      <div className="relative z-10 flex flex-col items-center justify-center px-5 text-center">

        {/* MOHAMMAD */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-display
              text-[13vw]
              font-black
              uppercase
              leading-[0.9]
              tracking-[0.01em]
              text-[#E8EDF2]
              sm:text-[10vw]
              lg:text-[7vw]
            "
          >
            MOHAMMAD
          </motion.h1>
        </div>

        {/* AAMIR */}
        <div className="mt-1 overflow-hidden sm:mt-2">
          <motion.h1
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-display
              text-[13vw]
              font-black
              uppercase
              leading-[0.9]
              tracking-[0.01em]
              text-[#E8EDF2]
              sm:text-[10vw]
              lg:text-[7vw]
            "
          >
            AAMIR
            <span className="ml-2 text-accent-violet">.</span>
          </motion.h1>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-10 h-px w-[65%] origin-center bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default IntroLoader;