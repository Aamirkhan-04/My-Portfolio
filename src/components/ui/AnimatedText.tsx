import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

/** Character-by-character scroll-driven reveal, split per word so text wraps naturally. */
export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ").filter(Boolean);
  const totalChars = words.reduce((sum, w) => sum + w.length + 1, 0);
  const step = 1 / totalChars;
  let charIndex = 0;

  return (
    <p ref={ref} className={className}>
      {words.map((word, wi) => {
        const chars = Array.from(word);
        const node = (
          <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap">
            {chars.map((char, ci) => {
              const i = charIndex + ci;
              return (
                <Char
                  key={`${char}-${ci}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[i * step, Math.min(1, i * step + step * 8)]}
                />
              );
            })}
            {wi < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
        charIndex += chars.length + 1;
        return node;
      })}
    </p>
  );
}

export default AnimatedText;
