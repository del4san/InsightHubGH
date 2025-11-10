import { useState } from "react";
import { GeminiOverlayItem } from "./usePromptHistory";

export function useOverlay() {
  const [overlays, setOverlays] = useState<GeminiOverlayItem[]>([]);

  function extractOverlaysFromText(text: string) {
    try {
      const match = text.match(/\[.*?\]/s); // extract first JSON array block
      if (!match) return;

      const parsed = JSON.parse(match[0]) as GeminiOverlayItem[];
      if (Array.isArray(parsed)) {
        setOverlays(parsed);
      }
    } catch (err) {
      console.warn("Overlay extraction failed:", err);
    }
  }

  function clearOverlays() {
    setOverlays([]);
  }

  return { overlays, extractOverlaysFromText, clearOverlays };
}