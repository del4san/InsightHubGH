// src/App.tsx
import { useState } from "react";
import Map from "./map/Map";
import Prompt from "./prompt/Prompt";
import { GeminiChunk, FilterParams } from "./types";
import { sendPrompt } from "./api/sendPrompt";
import { extractOverlaysFromText } from "./utils/extractOverlays";

export default function App() {
  const [history, setHistory] = useState<GeminiChunk[]>([]);
  const [overlays, setOverlays] = useState<any[]>([]);

  const handleSubmit = async (prompt: string, filters: FilterParams) => {
    const stream = await sendPrompt(prompt);

    for await (const chunk of stream) {
      const geminiChunk: GeminiChunk = typeof chunk === "string"
        ? { text: chunk }
        : chunk;

      setHistory((prev) => [...prev, geminiChunk]);

      const extracted = extractOverlaysFromText(geminiChunk.text);
      if (extracted.length > 0) {
        setOverlays((prev) => [...prev, ...extracted]);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <Map overlays={overlays} />
      </div>
      <div className="p-4 border-t">
        <Prompt onSubmit={handleSubmit} />
      </div>
    </div>
  );
}