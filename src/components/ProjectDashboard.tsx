import React from "react";
import { GeminiChunk } from "../hooks/usePromptHistory";
import { useProjectStore } from "../hooks/useProjectStore";
import { useFirebaseProjects } from "../hooks/useFirebaseProjects";

export function ProjectDashboard({ onLoad }: { onLoad: (chunks: GeminiChunk[]) => void }) {
  const { savedProjects, loadProject, deleteProject } = useProjectStore();
  const { projects: cloudProjects, loadProject: loadCloudProject } = useFirebaseProjects();

  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Multi-Project Dashboard</h3>

      <div style={{ marginBottom: "16px" }}>
        <strong>Local Projects:</strong>
        <ul>
          {savedProjects.map((p) => (
            <li key={p.name}>
              <button onClick={() => onLoad(loadProject(p.name) || [])}>{p.name}</button>
              <button onClick={() => deleteProject(p.name)} style={{ marginLeft: "8px" }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Cloud Projects:</strong>
        <ul>
          {cloudProjects.map((p) => (
            <li key={p.id}>
              <button onClick={() => onLoad(loadCloudProject(p.id) || [])}>{p.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}