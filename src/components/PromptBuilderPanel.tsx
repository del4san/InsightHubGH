import React, { useState } from "react";
import { GeminiChunk } from "../hooks/usePromptHistory";
import { usePromptSuggestions } from "../hooks/usePromptSuggestions";

export function PromptBuilderPanel({
  setPrompt,
  region = "Ghana",
  chunks = [],
}: {
  setPrompt: (p: string) => void;
  region?: string;
  chunks?: GeminiChunk[];
}) {
  const [selected, setSelected] = useState("environment");
  const suggestions = usePromptSuggestions(chunks, region);

  function applyTemplate(type: string) {
    switch (type) {
      case "environment":
        setPrompt(promptForEnvironmentalScan(region));
        break;
      case "clusters":
        setPrompt(promptForClusterAnalysis(region));
        break;
    }
    setSelected(type);
  }

  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>Prompt Builder</h3>
      <select
        value={selected}
        onChange={(e) => applyTemplate(e.target.value)}
        style={{ marginRight: "8px" }}
      >
        <option value="environment">Environmental Scan</option>
        <option value="clusters">Cluster Analysis</option>
      </select>
      <button onClick={() => applyTemplate(selected)}>Apply</button>

      {suggestions.length > 0 && (
        <div style={{ marginTop: "12px" }}>
          <strong>Suggested:</strong>{" "}
          {suggestions.map((s) => (
            <button
              key={s.value}
              onClick={() => applyTemplate(s.value)}
              style={{ marginRight: "8px" }}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Gemini prompt templates with source tagging
function promptForEnvironmentalScan(region: string): string {
  return `Generate an environmental scan for ${region}, highlighting trends in infrastructure, climate, and public services. Use verified data from GSS, BoG, MoF, and PPA. Tag each insight with its source label in square brackets (e.g., [GSS], [BoG]).`;
}

function promptForClusterAnalysis(region: string): string {
  return `Perform a cluster analysis of development indicators in ${region}. Use data from GSS, BoG, and PPA. Tag each insight with its source label in square brackets (e.g., [GSS], [BoG], [PPA]). Format clearly.`;
}