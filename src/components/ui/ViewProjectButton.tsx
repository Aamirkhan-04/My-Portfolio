import { ArrowUpRight } from "lucide-react";

export function ViewProjectButton({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View source code of ${title} on GitHub`}
      className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/60 hover:bg-foreground/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-violet"
    >
      View Code
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export default ViewProjectButton;
