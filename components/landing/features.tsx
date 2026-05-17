import { BadgeCheck, Eye, FileDown, Layers3 } from "lucide-react";

const features = [
  {
    title: "Live Markdown Preview",
    description: "A preview pane updates while you write, so the README shape is visible before export.",
    icon: Eye,
  },
  {
    title: "Premium README Templates",
    description: "Template logic changes the actual markdown order, headings, and framing.",
    icon: Layers3,
  },
  {
    title: "Badge Generator",
    description: "Tech stack, license, GitHub, and demo badges are generated from the project data.",
    icon: BadgeCheck,
  },
  {
    title: "One-click Export",
    description: "Copy the markdown or download README.md directly from the browser.",
    icon: FileDown,
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-10 border-y border-border py-14 lg:grid-cols-[18rem_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Features</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Built like a focused dev utility</h2>
        </div>

        <div className="grid gap-0 border border-border">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="grid gap-5 border-b border-border bg-card p-5 last:border-b-0 md:grid-cols-[4rem_1fr_1.5fr]"
            >
              <div className="font-mono text-sm font-bold text-muted-foreground">0{index + 1}</div>
              <div className="flex items-center gap-3">
                <feature.icon className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              <p className="leading-7 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
