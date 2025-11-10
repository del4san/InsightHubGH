// src/prompt/Prompt.tsx
import { useState } from "react";
import { GeminiChunk, FilterParams } from "../types";

export default function Prompt({
  onSubmit,
}: {
  onSubmit: (prompt: string, filters: FilterParams) => void;
}) {
  const [prompt, setPrompt] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(prompt, {} as FilterParams); // Replace with real filters
      }}
      className="flex gap-2"
    >
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
        className="flex-1 border px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1">
        Send
      </button>
    </form>
  );
}