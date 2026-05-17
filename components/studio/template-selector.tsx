"use client";

import { Check } from "lucide-react";
import { readmeTemplates } from "@/lib/readme/defaults";
import type { ReadmeTemplate } from "@/lib/readme/types";
import { cn } from "@/lib/utils";

export function TemplateSelector({
  value,
  onChange,
}: {
  value: ReadmeTemplate;
  onChange: (value: ReadmeTemplate) => void;
}) {
  return (
    <div className="grid gap-2">
      {readmeTemplates.map((template) => (
        <button
          key={template}
          type="button"
          onClick={() => onChange(template)}
          className={cn(
            "flex min-h-12 items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-sm font-semibold transition",
            value === template
              ? "border-accent bg-accent-soft text-accent-dark"
              : "border-border bg-card text-foreground hover:bg-muted",
          )}
        >
          {template}
          {value === template ? <Check className="h-4 w-4" /> : null}
        </button>
      ))}
    </div>
  );
}
