import { useState } from "react";

export type GeminiChunk = {
  type: "clusteredMarkers" | "waterBodies" | "vegetation" | "elevation" | "boqOverlay";
  data: any[];
  tokenCount?: number;
};

export type GeminiSession = {
  prompt: string;
  chunks: GeminiChunk[];
};

export function usePromptHistory() {
  const [history, setHistory] = useState<GeminiSession[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState("Return JSON chunks with type clusteredMarkers, waterBodies, vegetation, elevation, and boqOverlay");

  function runPrompt() {
    setHistory((prev) => [...prev, { prompt: currentPrompt, chunks: [] }]);
  }

  function regenerate(index: number) {
    const session = history[index];
    setCurrentPrompt(session.prompt);
    setHistory((prev) => [...prev, { prompt: session.prompt, chunks: [] }]);
  }

  function pushChunk(chunk: GeminiChunk) {
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const updated = {
        ...last,
        chunks: [...last.chunks, chunk],
      };
      return [...prev.slice(0, -1), updated];
    });
  }

  return {
    history,
    currentPrompt,
    setCurrentPrompt,
    runPrompt,
    regenerate,
    pushChunk,
  };
}