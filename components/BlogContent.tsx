import React from "react";

interface BlogContentProps {
  content: string;
}

function formatInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = content.split("\n\n").filter(Boolean);

  return (
    <div className="space-y-4">
      {blocks.map((block, idx) => {
        if (block.startsWith("### ")) {
          return (
            <h2
              key={idx}
              className="font-display text-card-title font-semibold text-foreground tracking-display mt-10 mb-4 first:mt-0"
            >
              {block.replace("### ", "")}
            </h2>
          );
        }

        if (block.startsWith("- ")) {
          return (
            <ul
              key={idx}
              className="space-y-2 pl-5 list-disc marker:text-primary/60 font-body text-body text-tertiary leading-relaxed"
            >
              {block.split("\n").map((line, lineIdx) => (
                <li key={lineIdx}>{formatInline(line.replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="font-body text-body text-tertiary leading-relaxed">
            {formatInline(block)}
          </p>
        );
      })}
    </div>
  );
}
