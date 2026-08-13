import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

export function ViewProjectButton({ href, title }: { href: string; title: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View source code of ${title} on GitHub`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35, ease }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground/25 bg-foreground/[0.04] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur-md hover:border-accent-violet/70 hover:shadow-glow-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet"
    >
      <span className="btn-shine" aria-hidden="true" />
      <span className="relative z-10 inline-flex items-center gap-2">
        <GithubIcon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
        View Code
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

export default ViewProjectButton;
