import { useEffect, useState } from "react";
import { GeminiChunk } from "./usePromptHistory";

export function usePromptSuggestions(chunks: GeminiChunk[], region: string) {
  const [suggestions, setSuggestions] = useState<{ label: string; value: string; region: string }[]>([]);

  useEffect(() => {
    const types = new Set(chunks.map((c) => c.type));
    const recs: string[] = [];

    if (types.has("boqOverlay")) recs.push("BOQ Only");
    if (types.has("clusteredMarkers")) recs.push("Cluster Analysis");
    if (types.has("vegetation") || types.has("elevation") || types.has("waterBodies"))
      recs.push("Environmental Scan");

    if (recs.length === 0) recs.push("Affordable Housing");

    const formatted = recs.map((label) => ({
      label,
      value: label.toLowerCase().replace(/\s+/g, ""),
      region,
    }));

    setSuggestions(formatted);
  }, [chunks, region]);

  return suggestions;
}