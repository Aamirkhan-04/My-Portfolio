import type { ReactNode } from "react";

interface ContactButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet disabled:pointer-events-none disabled:opacity-60 gradient-pill";

export function ContactButton({
  children,
  href,
  onClick,
  download,
  external,
  type = "button",
  disabled,
  className = "",
}: ContactButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        {...(download ? { download: "" } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${className}`}>
      {children}
    </button>
  );
}

export default ContactButton;
