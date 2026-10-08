export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export type SkillIcon = "java" | "spring" | "database" | "frontend" | "tools";

export interface SkillGroup {
  index: string;
  category: string;
  icon: SkillIcon;
  title: string;
  description: string;
  tags: string[];
   level: number; 
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  images: { large: string; small1: string; small2: string };
}

export interface TimelineEntry {
  kind: string;
  title: string;
  subtitle: string;
  place?: string;
  period: string;
  description?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  roles: string[];
  heroHeading: string;
  heroSubtitle: string;
  introText: string;
  aboutText: string;
  socials: SocialLink[];
  skills: SkillGroup[];
  projects: Project[];
  journey: TimelineEntry[];
  marquee: string[];
  resumePath: string;
  contact: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}
