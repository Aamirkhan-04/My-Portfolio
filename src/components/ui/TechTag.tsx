export function TechTag({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] ${
        dark
          ? "border-black/15 text-black/70"
          : "border-foreground/15 bg-foreground/5 text-foreground/70"
      }`}
    >
      {label}
    </span>
  );
}

export default TechTag;
