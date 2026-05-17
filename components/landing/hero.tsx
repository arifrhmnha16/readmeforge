"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Braces, CheckCircle2, FileCode2, LayoutTemplate, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 lg:pb-24 lg:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end"
      >
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-accent-dark shadow-sm">
            <TerminalSquare className="h-4 w-4" />
            README studio for shipped projects
          </div>
          <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Create beautiful README files in minutes
          </h1>
        </div>

        <div className="border-l border-border pl-5">
          <p className="text-lg leading-8 text-muted-foreground">
            Generate clean, professional, and portfolio-ready README files with live preview, templates, badges, and
            one-click export.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <Link href="/studio">
              <Button className="w-full justify-between">
                Start Creating
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#templates">
              <Button variant="secondary" className="w-full justify-between">
                View Templates
                <LayoutTemplate className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        id="examples"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
      >
        <div className="flex items-center justify-between border-b border-border bg-[#0d131a] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="hidden items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground sm:flex">
            <Braces className="h-3.5 w-3.5 text-accent" />
            readmeforge/studio
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">README.md</span>
        </div>

        <div className="grid min-h-[31rem] lg:grid-cols-[17rem_1fr_22rem]">
          <aside className="border-b border-border bg-[#0b1016] p-5 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Inputs</p>
            <div className="mt-5 space-y-4">
              {[
                ["Project", "Shotfolio"],
                ["Template", "Modern Developer"],
                ["Stack", "Next.js, TypeScript"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="border-b border-border p-5 lg:border-b-0 lg:border-r">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {["Preview", "Markdown", "Badges", "Export"].map((tab, index) => (
                <span
                  key={tab}
                  className={`rounded-md border px-3 py-1 text-xs font-bold ${
                    index === 0
                      ? "border-accent bg-accent-soft text-accent-dark"
                      : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="rounded-xl border border-border bg-[#080c11] p-6">
              <p className="font-mono text-xs text-accent"># Shotfolio</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">Premium portfolio cover generator</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                A generated README with badges, project links, installation steps, usage notes, and environment
                variables.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Live preview", "Premium templates", "PNG export", "Auto styling"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <pre className="mt-6 overflow-hidden rounded-lg border border-border bg-[#05080c] p-4 text-xs text-[#dce6f2]">
                <code>npm install{"\n"}npm run dev{"\n"}npm run build</code>
              </pre>
            </div>
          </div>

          <aside className="bg-[#0b1016] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Export</p>
              <FileCode2 className="h-4 w-4 text-accent" />
            </div>
            <div className="mt-5 space-y-3">
              {["README.md", "Copy markdown", "Download file"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-lg border border-border bg-card px-3 py-3">
                  <span className="text-sm font-semibold">{item}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}
