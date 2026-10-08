import { useState } from "react";
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
import { IntroLoader } from "@/components/ui/IntroLoader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroLoader
          onComplete={() => {
            setShowIntro(false);
          }}
        />
      )}

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
    </>
  );
}