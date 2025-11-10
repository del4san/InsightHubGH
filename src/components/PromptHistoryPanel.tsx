import React from "react";
import { GeminiSession } from "./usePromptHistory";

export function PromptHistoryPanel({ history, onRegenerate }: {
  history: GeminiSession[];
  onRegenerate: (index: number) => void;
}) {
  return (
    <div>
      <h3>Prompt History</h3>
      {history.map((session, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <p><strong>{session.prompt}</strong></p>
          <button onClick={() => onRegenerate(index)}>Regenerate</button>
        </div>
      ))}
    </div>
  );
}