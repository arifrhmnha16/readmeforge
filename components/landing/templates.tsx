import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const templates = [
  {
    name: "Minimal Clean",
    description: "Direct project docs with lean sections and fast scanning.",
    sections: ["About", "Features", "Installation"],
    bestFor: "Utilities",
  },
  {
    name: "Modern Developer",
    description: "Centered intro, badges, highlights, and quick-start flow.",
    sections: ["Highlights", "Built With", "Quick Start"],
    bestFor: "Dev tools",
  },
  {
    name: "SaaS Product",
    description: "Product framing for demos, deployment, and capabilities.",
    sections: ["Overview", "Capabilities", "Deployment"],
    bestFor: "Products",
  },
  {
    name: "Open Source",
    description: "Contributor-friendly structure with license and contribution notes.",
    sections: ["Getting Started", "Contributing", "License"],
    bestFor: "Repos",
  },
  {
    name: "Portfolio Project",
    description: "Case-study style README for presenting project decisions.",
    sections: ["Project Story", "Stack Decisions", "See It Live"],
    bestFor: "Case studies",
  },
  {
    name: "Dark Aesthetic",
    description: "Compact, bold markdown structure with a strong visual intro.",
    sections: ["Concept", "Core Features", "Install & Run"],
    bestFor: "Showcases",
  },
];

export function Templates() {
  return (
    <section id="templates" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Templates</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Pick the documentation pattern</h2>
          <p className="mt-5 max-w-md leading-7 text-muted-foreground">
            These are real markdown generators, not visual skins. Every option changes the README structure.
          </p>
          <Link href="/studio" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent">
            Open studio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          {templates.map((template, index) => (
            <div
              key={template.name}
              className="grid gap-5 border-b border-border p-5 last:border-b-0 md:grid-cols-[4rem_1fr_9rem]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted font-mono text-sm font-bold text-accent">
                {index + 1}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold">{template.name}</h3>
                  <span className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">
                    {template.bestFor}
                  </span>
                </div>
                <p className="mt-2 leading-7 text-muted-foreground">{template.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {template.sections.map((section) => (
                    <span key={section} className="rounded-md bg-[#080c11] px-3 py-1.5 font-mono text-xs text-muted-foreground">
                      ## {section}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start justify-end">
                <FileText className="h-5 w-5 text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
