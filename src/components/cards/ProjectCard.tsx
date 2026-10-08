import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TechTag } from "@/components/ui/TechTag";
import { ViewProjectButton } from "@/components/ui/ViewProjectButton";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (total - index - 1) * 0.045;

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, targetScale]
  );

  const isCRM = project.id === "customer-support-crm";

  const getImageSrc = (src: string) => {
    if (isCRM && src.endsWith(".jpg")) {
      return src.replace(".jpg", ".png");
    }

    return src;
  };

  return (
    <div
      ref={ref}
      className="sticky top-16 sm:top-24"
      style={{ paddingTop: `${index * 1.75}rem` }}
    >
      <motion.article
        style={{ scale, willChange: "transform" }}
        className="group/card relative overflow-hidden rounded-[1.75rem] border border-foreground/12 bg-[#111114] p-5 shadow-[0_30px_80px_-40px_rgba(139,92,246,0.55)] transition-colors duration-500 hover:border-accent-violet/45 sm:rounded-[2.5rem] sm:p-10"
      >
        <span className="skill-card-corner" aria-hidden="true" />

        {/* Project Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[0.68rem] uppercase tracking-[0.24em] text-accent-violet">
            {project.index} — {project.category}
          </span>

          <div className="hidden sm:block">
            <ViewProjectButton
              href={project.github}
              title={project.title}
            />
          </div>
        </div>

        {/* Project Title */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <h3
            className="min-w-0 flex-1 font-display font-bold uppercase leading-[0.95] tracking-tight text-gradient-heading"
            style={{ fontSize: "clamp(1.6rem, 4.2vw, 3.5rem)" }}
          >
            {project.title}
          </h3>

          <div className="shrink-0 sm:hidden">
            <ViewProjectButton
              href={project.github}
              title={project.title}
            />
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechTag
              key={technology}
              label={technology}
            />
          ))}
        </div>

        {/* Project Images */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <img
              src={getImageSrc(project.images.small1)}
              alt={`${project.title} interface detail`}
              loading={isCRM ? "eager" : "lazy"}
              width={768}
              height={768}
              className="h-32 w-full rounded-2xl object-cover sm:h-[10.5rem]"
              onError={(event) => {
                const image = event.currentTarget;

                if (image.src.endsWith(".jpg")) {
                  image.src = image.src.replace(".jpg", ".png");
                }
              }}
            />

            <img
              src={getImageSrc(project.images.small2)}
              alt={`${project.title} secondary screen`}
              loading={isCRM ? "eager" : "lazy"}
              width={768}
              height={768}
              className="h-32 w-full rounded-2xl object-cover sm:h-[10.5rem]"
              onError={(event) => {
                const image = event.currentTarget;

                if (image.src.endsWith(".jpg")) {
                  image.src = image.src.replace(".jpg", ".png");
                }
              }}
            />
          </div>

          <img
            src={getImageSrc(project.images.large)}
            alt={`${project.title} main dashboard mockup`}
            loading={isCRM ? "eager" : "lazy"}
            width={1024}
            height={768}
            className="h-44 w-full rounded-2xl object-cover sm:h-[22.5rem]"
            onError={(event) => {
              const image = event.currentTarget;

              if (image.src.endsWith(".jpg")) {
                image.src = image.src.replace(".jpg", ".png");
              }
            }}
          />
        </div>

        {/* Project Description */}
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/65 sm:text-base">
          {project.description}
        </p>
      </motion.article>
    </div>
  );
}

export default ProjectCard;