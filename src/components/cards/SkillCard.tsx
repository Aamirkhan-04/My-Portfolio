import { FadeIn } from "@/components/ui/FadeIn";
import { TechTag } from "@/components/ui/TechTag";
import type { SkillGroup } from "@/types/portfolio";

export function SkillCard({ skill, delay = 0 }: { skill: SkillGroup; delay?: number }) {
  return (
    <FadeIn delay={delay} className="border-t border-black/15">
      <div className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)] sm:gap-10 sm:py-14">
        <span
          className="font-display font-black leading-none text-black/85"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {skill.index}
        </span>
        <div>
          <h3
            className="font-display font-bold uppercase leading-none tracking-tight text-black"
            style={{ fontSize: "clamp(1.5rem, 3.6vw, 3rem)" }}
          >
            {skill.title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/65 sm:text-base">
            {skill.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skill.tags.map((t) => (
              <TechTag key={t} label={t} dark />
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default SkillCard;
