import { FadeIn } from "@/components/ui/FadeIn";
import type { TimelineEntry } from "@/types/portfolio";

export function TimelineItem({ entry, delay = 0 }: { entry: TimelineEntry; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="relative border-l border-foreground/15 pl-6 sm:pl-10">
        <span
          className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-accent-violet shadow-[0_0_18px_rgba(139,92,246,0.9)]"
          aria-hidden="true"
        />
        <p className="text-[0.66rem] uppercase tracking-[0.24em] text-accent-violet">
          {entry.kind} · {entry.period}
        </p>
        <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
          {entry.title}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-[0.14em] text-foreground/55">
          {entry.subtitle}
        </p>
        {entry.place && <p className="mt-1 text-sm text-foreground/45">{entry.place}</p>}
        {entry.description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/65">
            {entry.description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

export default TimelineItem;
