import { portfolioData } from "@/data/portfolioData";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  const total = portfolioData.projects.length;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-20 -mt-8 rounded-t-[2rem] bg-background px-5 py-20 sm:-mt-12 sm:rounded-t-[3.5rem] sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionHeading id="projects-heading">PROJECTS</SectionHeading>
        </FadeIn>

        <div className="mt-12 sm:mt-20">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} total={total} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
