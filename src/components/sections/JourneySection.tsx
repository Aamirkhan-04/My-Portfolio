import { portfolioData } from "@/data/portfolioData";
import { TimelineItem } from "@/components/cards/TimelineItem";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JourneySection() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative z-30 bg-background px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionHeading id="journey-heading">JOURNEY</SectionHeading>
        </FadeIn>

        <div className="mt-12 space-y-14 sm:mt-20">
          {portfolioData.journey.map((entry, i) => (
            <TimelineItem key={entry.title} entry={entry} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
