"use client";

export function MarkdownOutput({ markdown }: { markdown: string }) {
  return (
    <textarea
      aria-label="Generated README markdown"
      className="studio-scrollbar h-[calc(100vh-15rem)] min-h-[32rem] w-full resize-none rounded-2xl border border-border bg-[#0b0a09] p-5 font-mono text-sm leading-7 text-[#fff8ef] outline-none focus:ring-2 focus:ring-accent/30"
      readOnly
      value={markdown}
    />
  );
}
