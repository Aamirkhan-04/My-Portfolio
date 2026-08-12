import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {portfolioData.socials.map((s) => {
        const Icon = icons[s.icon];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} profile of ${portfolioData.name}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground/75 transition-colors hover:border-foreground/40 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
