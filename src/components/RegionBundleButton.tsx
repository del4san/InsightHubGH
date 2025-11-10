import React from "react";
import { useRegionBundle } from "../hooks/useRegionBundle";
import { useGeminiStream } from "../hooks/useGeminiStream";
import { buildRegionRankingPrompt } from "../utils/regionPrompt";

const RegionBundleButton: React.FC<{ regions: any[] }> = ({ regions }) => {
  const { sendPrompt } = useGeminiStream();

  const handleExport = async () => {
    const token = localStorage.getItem("token")!;
    try {
      await useRegionBundle(regions, token);
      console.log("✅ Region bundle exported.");

      // Optional Gemini ranking trigger
      const overlays = Object.fromEntries(
        regions.map((r) => [r.name, r.traits || ""])
      );
      const prompt = buildRegionRankingPrompt(overlays);
      sendPrompt(prompt);
    } catch {
      alert("Export failed");
    }
  };

  return <button onClick={handleExport}>📦 Download + Rank Regions</button>;
};

export default RegionBundleButton;