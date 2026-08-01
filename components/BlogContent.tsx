import React from "react";

interface BlogContentProps {
  content: string;
}

function formatInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-medium text-foreground normal-case">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function renderParagraph(text: string, key: string) {
  return (
    <p
      key={key}
      className="font-body font-normal normal-case text-base text-foreground/80 leading-relaxed tracking-normal"
    >
      {formatInline(text)}
    </p>
  );
}

function renderList(lines: string[], key: string) {
  return (
    <ul
      key={key}
      className="space-y-2 pl-5 list-disc marker:text-primary/60 font-body font-normal normal-case text-base text-foreground/80 leading-relaxed tracking-normal"
    >
      {lines.map((line, lineIdx) => (
        <li key={lineIdx}>{formatInline(line.replace(/^- /, ""))}</li>
      ))}
    </ul>
  );
}

function renderHeading(text: string, key: string) {
  return (
    <h2
      key={key}
      className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight mt-10 mb-3 first:mt-0 normal-case"
    >
      {text}
    </h2>
  );
}

/** Split a content block into heading / list / paragraph nodes. */
function renderBlock(block: string, idx: number): React.ReactNode[] {
  const lines = block.split("\n").map((l) => l.trimEnd()).filter((l) => l.length > 0);
  if (lines.length === 0) return [];

  const nodes: React.ReactNode[] = [];
  let i = 0;

  if (lines[0].startsWith("### ")) {
    nodes.push(renderHeading(lines[0].replace(/^###\s+/, ""), `h-${idx}`));
    i = 1;
  }

  while (i < lines.length) {
    if (lines[i].startsWith("- ")) {
      const listLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listLines.push(lines[i]);
        i += 1;
      }
      nodes.push(renderList(listLines, `ul-${idx}-${i}`));
      continue;
    }

    const paraLines: string[] = [];
    while (i < lines.length && !lines[i].startsWith("- ") && !lines[i].startsWith("### ")) {
      paraLines.push(lines[i]);
      i += 1;
    }
    if (paraLines.length) {
      nodes.push(renderParagraph(paraLines.join(" "), `p-${idx}-${i}`));
    }
  }

  return nodes;
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = content.split(/\n\s*\n/).filter((b) => b.trim().length > 0);

  return (
    <div className="blog-article-body space-y-5 normal-case">
      {blocks.flatMap((block, idx) => renderBlock(block.trim(), idx))}
    </div>
  );
}
