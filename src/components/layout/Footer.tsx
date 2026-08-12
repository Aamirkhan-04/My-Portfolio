import { portfolioData } from "@/data/portfolioData";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-tight text-foreground">
            {portfolioData.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/45">
            {portfolioData.title} — {portfolioData.location}
          </p>
        </div>
        <SocialLinks />
        <p className="text-xs uppercase tracking-[0.18em] text-foreground/35">
          © {new Date().getFullYear()} {portfolioData.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
