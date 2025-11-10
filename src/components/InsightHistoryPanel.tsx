import React from "react";
import { GeminiChunk } from "../hooks/usePromptHistory";

interface Props {
  history: GeminiChunk[];
  onSelect: (chunk: GeminiChunk) => void;
}

const InsightHistoryPanel: React.FC<Props> = ({ history, onSelect }) => {
  if (!history || history.length === 0) return null;

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h3>Insight History</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {history.map((chunk, i) => (
          <li key={i} style={{ marginBottom: "0.75rem" }}>
            <button
              onClick={() => onSelect(chunk)}
              style={{
                background: "#f5f5f5",
                border: "1px solid #aaa",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                width: "100%",
                textAlign: "left",
              }}
            >
              <strong>{chunk.prompt.slice(0, 60)}...</strong>
              <br />
              <span style={{ fontSize: "0.85em", color: "#555" }}>
                {new Date(chunk.timestamp).toLocaleString()}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsightHistoryPanel;