import Link from "next/link";
import { ArrowRight, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Final export</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Give every project the README it deserves
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 md:min-w-[28rem]">
          <div className="rounded-lg border border-border bg-muted p-4">
            <Copy className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-bold">Copy</p>
          </div>
          <div className="rounded-lg border border-border bg-muted p-4">
            <Download className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-bold">Download</p>
          </div>
          <Link href="/studio">
            <Button className="h-full w-full justify-between">
              Start
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
