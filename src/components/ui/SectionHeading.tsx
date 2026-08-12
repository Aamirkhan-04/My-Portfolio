interface SectionHeadingProps {
  children: string;
  variant?: "gradient" | "dark";
  className?: string;
  id?: string;
}

export function SectionHeading({
  children,
  variant = "gradient",
  className = "",
  id,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`font-display font-black uppercase leading-[0.85] tracking-tight ${
        variant === "gradient" ? "text-gradient-heading" : "text-black"
      } ${className}`}
      style={{ fontSize: "clamp(2.75rem, 12vw, 11rem)" }}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
