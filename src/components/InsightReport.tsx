import React from "react";

interface Props {
  content: string;
}

const InsightReport: React.FC<Props> = ({ content }) => {
  if (!content) return null;

  const lines = content.split("\n").filter((line) => line.trim());

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h3>Insight Report</h3>
      {lines.map((line, i) => {
        if (line.startsWith("#")) {
          const level = line.match(/^#+/)?.[0].length || 1;
          const text = line.replace(/^#+\s*/, "");
          const Tag = `h${Math.min(level + 2, 6)}` as keyof JSX.IntrinsicElements;
          return <Tag key={i}>{text}</Tag>;
        }

        return <p key={i} style={{ marginBottom: "0.5rem" }}>{line}</p>;
      })}
    </div>
  );
};

export default InsightReport;