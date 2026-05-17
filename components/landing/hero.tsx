"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-accent-dark shadow-sm">
          <Sparkles className="h-4 w-4" />
          Premium README generator
        </div>
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Create beautiful README files in minutes
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Generate clean, professional, and portfolio-ready README files with live preview, templates, badges, and
          one-click export.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/studio">
            <Button className="w-full sm:w-auto">
              Start Creating
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="#templates">
            <Button variant="secondary" className="w-full sm:w-auto">
              <Eye className="h-4 w-4" />
              View Templates
            </Button>
          </a>
        </div>
      </motion.div>

      <motion.div
        id="examples"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="rounded-2xl border border-border bg-card p-3 shadow-soft"
      >
        <div className="rounded-xl border border-border bg-[#080c11] p-6">
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">README.md</p>
              <h2 className="mt-2 text-2xl font-bold">Shotfolio</h2>
            </div>
            <span className="rounded-md bg-accent-soft px-3 py-1 text-xs font-bold text-accent-dark">Live</span>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted-foreground">
            <div>
              <h3 className="text-xl font-bold text-foreground">Premium portfolio cover generator</h3>
              <p className="mt-2">Turn screenshots into clean, professional portfolio covers with polished templates.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((item) => (
                <span key={item} className="rounded-md border border-border bg-card px-3 py-1 text-xs font-semibold">
                  {item}
                </span>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Live preview", "Device mockups", "PNG export", "Auto styling"].map((item) => (
                <div key={item} className="rounded-lg border border-border bg-card p-3 font-medium text-foreground">
                  {item}
                </div>
              ))}
            </div>
            <pre className="overflow-hidden rounded-lg border border-border bg-[#05080c] p-4 text-xs text-[#dce6f2]">
              <code>npm install{"\n"}npm run dev</code>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
