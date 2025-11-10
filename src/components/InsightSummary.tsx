import React from "react";

interface Props {
  summary: string;
}

const sourceMap: Record<string, string> = {
  GSS: "Ghana Statistical Service",
  BoG: "Bank of Ghana",
  PPA: "Public Procurement Authority",
  MoF: "Ministry of Finance",
  MLGRD: "Ministry of Local Government",
};

const InsightSummary: React.FC<Props> = ({ summary }) => {
  if (!summary) return null;

  const tagged = summary.split("\n").map((line, i) => {
    const match = line.match(/\[(GSS|BoG|PPA|MoF|MLGRD)\]/);
    const tag = match?.[1];
    const label = tag ? sourceMap[tag] || tag : null;

    return (
      <p key={i} style={{ marginBottom: "0.5rem" }}>
        {line}{" "}
        {label && (
          <span style={{ fontSize: "0.85em", color: "#555" }}>
            — <em>{label}</em>
          </span>
        )}
      </p>
    );
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
  };

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h3>Insight Summary</h3>
      {tagged}
      <button onClick={copyToClipboard} style={{ marginTop: "1rem" }}>
        Copy to Clipboard
      </button>
    </div>
  );
};

export default InsightSummary;