import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const templates = [
  {
    name: "Minimal Clean",
    description: "Simple README with direct sections, clean setup steps, and no extra ceremony.",
    sections: ["About", "Features", "Installation"],
    badge: "Minimal",
  },
  {
    name: "Modern Developer",
    description: "Centered intro, badges, highlights, and a polished structure for developer tools.",
    sections: ["Highlights", "Built With", "Quick Start"],
    badge: "Popular",
  },
  {
    name: "SaaS Product",
    description: "Product-focused README for demos, deployment notes, and capability-driven docs.",
    sections: ["Overview", "Capabilities", "Deployment"],
    badge: "Product",
  },
  {
    name: "Open Source",
    description: "Contributor-friendly format with setup, usage, links, license, and contribution notes.",
    sections: ["Getting Started", "Contributing", "License"],
    badge: "Community",
  },
  {
    name: "Portfolio Project",
    description: "Case-study style README that frames your project as professional portfolio work.",
    sections: ["Project Story", "Stack Decisions", "See It Live"],
    badge: "Portfolio",
  },
  {
    name: "Dark Aesthetic",
    description: "Bold markdown structure with centered title, dark-inspired tone, and compact sections.",
    sections: ["Concept", "Core Features", "Install & Run"],
    badge: "Dark",
  },
];

export function Templates() {
  return (
    <section id="templates" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Templates</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Start with the right shape</h2>
        </div>
        <p className="max-w-md leading-7 text-muted-foreground">
          Each template changes the markdown structure, tone, and section ordering so every project feels intentional.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <Card key={template.name} className="group overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-lift">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{template.name}</h3>
              </div>
              <span className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-bold text-accent">
                {template.badge}
              </span>
            </div>
            <p className="mt-4 min-h-20 leading-7 text-muted-foreground">{template.description}</p>
            <div className="mt-6 rounded-lg border border-border bg-[#080c11] p-4">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                README structure
              </div>
              <div className="grid gap-2">
                {template.sections.map((section) => (
                  <div key={section} className="rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold">
                    ## {section}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
