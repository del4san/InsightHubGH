import { useState, useEffect } from "react";
import { GeminiChunk } from "./usePromptHistory";

export function useProjectStore() {
  const [savedProjects, setSavedProjects] = useState<{ name: string; chunks: GeminiChunk[] }[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("insighthub_projects");
    if (raw) setSavedProjects(JSON.parse(raw));
  }, []);

  function saveProject(name: string, chunks: GeminiChunk[]) {
    const updated = [...savedProjects.filter(p => p.name !== name), { name, chunks }];
    setSavedProjects(updated);
    localStorage.setItem("insighthub_projects", JSON.stringify(updated));
  }

  function loadProject(name: string): GeminiChunk[] | null {
    const match = savedProjects.find(p => p.name === name);
    return match ? match.chunks : null;
  }

  return { savedProjects, saveProject, loadProject };
}