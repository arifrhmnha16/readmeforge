import { BadgeCheck, Eye, FileDown, Layers3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Live Markdown Preview",
    description: "Watch your README take shape instantly in a GitHub-like reading experience.",
    icon: Eye,
  },
  {
    title: "Premium README Templates",
    description: "Choose structures for portfolio projects, SaaS products, and open source repos.",
    icon: Layers3,
  },
  {
    title: "Badge Generator",
    description: "Turn your tech stack, license, repository, and demo links into polished badges.",
    icon: BadgeCheck,
  },
  {
    title: "One-click Export",
    description: "Copy markdown or download a production-ready README.md without any backend.",
    icon: FileDown,
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Features</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Everything a polished repo needs</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6">
            <feature.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
