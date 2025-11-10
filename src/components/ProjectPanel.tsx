import React, { useState } from "react";
import { GeminiChunk } from "../hooks/usePromptHistory";
import { useProjectStore } from "../hooks/useProjectStore";

export function ProjectPanel({ chunks, onLoad }: { chunks: GeminiChunk[]; onLoad: (c: GeminiChunk[]) => void }) {
  const { savedProjects, saveProject, loadProject } = useProjectStore();
  const [name, setName] = useState("");

  function handleSave() {
    if (name.trim()) saveProject(name.trim(), chunks);
  }

  function handleLoad(n: string) {
    const loaded = loadProject(n);
    if (loaded) onLoad(loaded);
  }

  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Project Save/Load</h3>
      <input
        type="text"
        placeholder="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "8px" }}
      />
      <button onClick={handleSave}>Save</button>

      <div style={{ marginTop: "12px" }}>
        <strong>Saved Projects:</strong>
        <ul>
          {savedProjects.map((p) => (
            <li key={p.name}>
              <button onClick={() => handleLoad(p.name)}>{p.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}