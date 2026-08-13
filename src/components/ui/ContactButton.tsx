import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContactButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "solid" | "ghost";
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet disabled:pointer-events-none disabled:opacity-60";

const solid = "text-white gradient-pill gradient-pill-anim shadow-glow-violet";
const ghost =
  "border border-foreground/25 text-foreground hover:border-accent-violet/70 hover:shadow-glow-violet";

export function ContactButton({
  children,
  href,
  onClick,
  download,
  external,
  type = "button",
  disabled,
  variant = "solid",
  className = "",
}: ContactButtonProps) {
  const cls = `${base} ${variant === "solid" ? solid : ghost} ${className}`;
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.035, y: -2 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.35, ease },
  };

  const inner = (
    <>
      <span className="btn-shine" aria-hidden="true" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        {...motionProps}
        {...(download ? { download: "" } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}

export default ContactButton;
