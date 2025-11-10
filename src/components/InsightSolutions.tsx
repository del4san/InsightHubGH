import React from "react";

interface Props {
  content: string;
}

const InsightSolutions: React.FC<Props> = ({ content }) => {
  if (!content) return null;

  const items = content
    .split("\n")
    .filter((line) => line.trim())
    .map((line, i) => {
      const match = line.match(/\[(GSS|BoG|PPA|MoF|MLGRD)\]/);
      const tag = match?.[1];
      const sourceMap: Record<string, string> = {
        GSS: "Ghana Statistical Service",
        BoG: "Bank of Ghana",
        PPA: "Public Procurement Authority",
        MoF: "Ministry of Finance",
        MLGRD: "Ministry of Local Government",
      };
      const label = tag ? sourceMap[tag] || tag : null;

      return (
        <li key={i} style={{ marginBottom: "0.5rem" }}>
          {line}{" "}
          {label && (
            <span style={{ fontSize: "0.85em", color: "#555" }}>
              — <em>{label}</em>
            </span>
          )}
        </li>
      );
    });

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h3>Recommended Solutions</h3>
      <ul>{items}</ul>
    </div>
  );
};

export default InsightSolutions;