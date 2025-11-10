import React, { useState } from "react";
import { GeminiChunk } from "../hooks/usePromptHistory";
import { useRealtimeProject } from "../hooks/useRealtimeProject";

export function RealtimeSyncPanel({ onUpdate }: { onUpdate: (chunks: GeminiChunk[]) => void }) {
  const [projectId, setProjectId] = useState("");

  useRealtimeProject(projectId, onUpdate);

  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Realtime Sync</h3>
      <input
        type="text"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
        style={{ marginRight: "8px" }}
      />
      <span>Watching for updates...</span>
    </div>
  );
}