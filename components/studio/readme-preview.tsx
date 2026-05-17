"use client";

function inlineMarkdown(value: string) {
  let html = value
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/(?<!!)\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  html = html.replace(/<img alt="([^"]*)" src="([^"]*)" \/>/g, '<img alt="$1" src="$2" />');
  return html;
}

function renderMarkdown(markdown: string) {
  const lines = markdown.split("\n");
  const blocks: string[] = [];
  let inList = false;
  let inCode = false;
  let codeBuffer: string[] = [];

  const closeList = () => {
    if (inList) {
      blocks.push("</ul>");
      inList = false;
    }
  };

  lines.forEach((line) => {
    if (line.startsWith("```")) {
      if (inCode) {
        blocks.push(`<pre><code>${codeBuffer.join("\n")}</code></pre>`);
        codeBuffer = [];
        inCode = false;
      } else {
        closeList();
        inCode = true;
      }
      return;
    }

    if (inCode) {
      codeBuffer.push(line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      return;
    }

    if (!line.trim()) {
      closeList();
      return;
    }

    if (line.startsWith("# ")) {
      closeList();
      blocks.push(`<h1>${line.slice(2)}</h1>`);
      return;
    }

    if (line.startsWith("## ")) {
      closeList();
      blocks.push(`<h2>${line.slice(3)}</h2>`);
      return;
    }

    if (line.startsWith("### ")) {
      closeList();
      blocks.push(`<h3>${line.slice(4)}</h3>`);
      return;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        blocks.push("<ul>");
        inList = true;
      }
      blocks.push(`<li>${inlineMarkdown(line.slice(2))}</li>`);
      return;
    }

    if (line.startsWith("> ")) {
      closeList();
      blocks.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`);
      return;
    }

    closeList();
    blocks.push(`<p>${inlineMarkdown(line)}</p>`);
  });

  closeList();
  return blocks.join("");
}

export function ReadmePreview({ markdown }: { markdown: string }) {
  return (
    <div className="studio-scrollbar h-[calc(100vh-15rem)] min-h-[32rem] overflow-auto rounded-xl border border-border bg-card p-6 shadow-sm">
      <article className="github-markdown" dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />
    </div>
  );
}
