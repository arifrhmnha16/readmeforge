"use client";

export function MarkdownOutput({ markdown }: { markdown: string }) {
  return (
    <textarea
      aria-label="Generated README markdown"
      className="studio-scrollbar h-[calc(100vh-15rem)] min-h-[32rem] w-full resize-none rounded-xl border border-border bg-[#05080c] p-5 font-mono text-sm leading-7 text-[#dce6f2] outline-none focus:ring-2 focus:ring-accent/30"
      readOnly
      value={markdown}
    />
  );
}
