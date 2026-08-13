import { portfolioData } from "@/data/portfolioData";
import { SkillCard } from "@/components/cards/SkillCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="skills-surface relative z-10 rounded-t-[2rem] px-5 py-20 sm:rounded-t-[3.5rem] sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionHeading id="skills-heading">SKILLS</SectionHeading>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {portfolioData.skills.map((skill, i) => (
            <SkillCard key={skill.index} skill={skill} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
