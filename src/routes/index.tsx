import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ContactSection } from "@/components/sections/ContactSection";

const title = "Mohammad Aamir — Full Stack Java Developer";
const description =
  "Portfolio of Mohammad Aamir, a Full Stack Java Developer skilled in Java, Spring Boot, Hibernate, MySQL, React, REST APIs and Spring AI.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#0C0C0C" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohammad Aamir",
          jobTitle: "Full Stack Java Developer",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
          sameAs: [
            "https://github.com/Aamirkhan-04",
            "https://www.linkedin.com/in/mohammad-aamir-550a0b332/",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
