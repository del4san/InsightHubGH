import React from "react";

export function PromptInputBar({ prompt, setPrompt, onRun }: {
  prompt: string;
  setPrompt: (p: string) => void;
  onRun: () => void;
}) {
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter geospatial prompt"
        style={{ flex: 1, padding: "8px" }}
      />
      <button onClick={onRun}>Run</button>
    </div>
  );
}