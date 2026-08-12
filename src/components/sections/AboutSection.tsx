import { portfolioData } from "@/data/portfolioData";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Magnet } from "@/components/ui/Magnet";

const decor = [
  { className: "left-2 top-24 sm:left-10 sm:top-28", shape: "orb", label: "Java orb" },
  { className: "right-3 top-32 sm:right-16 sm:top-40", shape: "cylinder", label: "Database" },
  { className: "left-4 bottom-16 sm:left-20 sm:bottom-24", shape: "cube", label: "Code cube" },
  { className: "right-4 bottom-24 sm:right-24 sm:bottom-32", shape: "ring", label: "Spring ring" },
];

function DecorObject({ shape }: { shape: string }) {
  if (shape === "orb")
    return (
      <div className="h-12 w-12 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f0abfc,#7c3aed_60%,#1e1b4b)] shadow-[0_0_45px_rgba(139,92,246,0.55)] sm:h-20 sm:w-20" />
    );
  if (shape === "cylinder")
    return (
      <div className="h-12 w-10 rounded-[45%/18%] bg-gradient-to-b from-[#60a5fa] to-[#1e3a8a] shadow-[0_0_40px_rgba(59,130,246,0.45)] sm:h-20 sm:w-16" />
    );
  if (shape === "cube")
    return (
      <div className="h-11 w-11 rotate-12 rounded-lg border border-foreground/25 bg-gradient-to-br from-[#2a2a35] to-[#0d0d10] shadow-[0_0_35px_rgba(214,158,255,0.25)] sm:h-16 sm:w-16" />
    );
  return (
    <div className="h-12 w-12 rounded-full border-[6px] border-[#a3e635]/70 shadow-[0_0_40px_rgba(163,230,53,0.35)] sm:h-20 sm:w-20 sm:border-[10px]" />
  );
}

export function AboutSection() {
  const paragraphs = portfolioData.aboutText.split("\n\n");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-background px-5 py-24 sm:px-8 sm:py-32"
    >
      {decor.map((d) => (
        <div key={d.label} className={`pointer-events-none absolute ${d.className}`} aria-hidden="true">
          <Magnet strength={0.5}>
            <div className="decor-float">
              <DecorObject shape={d.shape} />
            </div>
          </Magnet>
        </div>
      ))}

      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <SectionHeading id="about-heading">ABOUT ME</SectionHeading>
        </FadeIn>

        <div className="mt-12 space-y-7 text-left sm:mt-16">
          {paragraphs.map((p, i) => (
            <AnimatedText
              key={i}
              text={p.replace(/\n/g, " ")}
              className="text-base leading-relaxed text-foreground sm:text-2xl sm:leading-[1.55]"
            />
          ))}
        </div>

        <FadeIn delay={0.15}>
          <p className="mt-12 text-[0.68rem] uppercase tracking-[0.28em] text-foreground/45">
            Based in {portfolioData.location}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export default AboutSection;
