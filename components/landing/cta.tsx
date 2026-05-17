import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center text-foreground shadow-soft sm:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Ready to forge</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Give every project the README it deserves
        </h2>
        <Link href="/studio" className="mt-8 inline-flex">
          <Button>
            Start Creating
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
