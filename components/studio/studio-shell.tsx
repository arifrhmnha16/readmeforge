"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, Copy, Download, FileText, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReadmeForm } from "@/components/studio/readme-form";
import { ReadmePreview } from "@/components/studio/readme-preview";
import { MarkdownOutput } from "@/components/studio/markdown-output";
import { defaultReadmeData } from "@/lib/readme/defaults";
import { generateReadme } from "@/lib/readme/generate-readme";
import type { ReadmeData } from "@/lib/readme/types";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "readmeforge:data";

type Tab = "Preview" | "Markdown";

export function StudioShell() {
  const [data, setData] = useState<ReadmeData>(defaultReadmeData);
  const [activeTab, setActiveTab] = useState<Tab>("Preview");
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setData({ ...defaultReadmeData, ...JSON.parse(saved) });
      } catch {
        setData(defaultReadmeData);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, hydrated]);

  const markdown = useMemo(() => generateReadme(data), [data]);

  async function copyMarkdown() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function downloadMarkdown() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.md";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function resetStudio() {
    window.localStorage.removeItem(STORAGE_KEY);
    setData(defaultReadmeData);
    setActiveTab("Preview");
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-[92rem] flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lift">
              <FileText className="h-5 w-5" />
            </Link>
            <div>
              <p className="font-bold">ReadmeForge Studio</p>
              <p className="text-sm text-muted-foreground">Autosaved locally</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="secondary" onClick={copyMarkdown}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy Markdown"}
            </Button>
            <Button type="button" onClick={downloadMarkdown}>
              <Download className="h-4 w-4" />
              Download README.md
            </Button>
            <Button type="button" variant="secondary" onClick={resetStudio}>
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[92rem] gap-6 px-5 py-6 lg:grid-cols-[25rem_1fr] lg:px-8">
        <aside className="studio-scrollbar max-h-none overflow-visible lg:max-h-[calc(100vh-7rem)] lg:overflow-auto lg:pr-2">
          <ReadmeForm data={data} onChange={setData} />
        </aside>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="min-w-0"
        >
          <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Export target</p>
              <h1 className="mt-1 text-2xl font-bold">README.md</h1>
            </div>
            <div className="grid grid-cols-2 rounded-full border border-border bg-muted p-1">
              {(["Preview", "Markdown"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "h-10 rounded-full px-5 text-sm font-bold transition",
                    activeTab === tab ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "Preview" ? <ReadmePreview markdown={markdown} /> : <MarkdownOutput markdown={markdown} />}
        </motion.section>
      </div>
    </main>
  );
}
