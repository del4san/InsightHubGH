import React, { useState } from "react";
import FilterPanel, { FilterParams } from "./components/FilterPanel";
import { PromptBuilderPanel } from "./components/PromptBuilderPanel";
import InsightSummary from "./components/InsightSummary";
import InsightSolutions from "./components/InsightSolutions";
import InsightReport from "./components/InsightReport";
import InsightHistoryPanel from "./components/InsightHistoryPanel";
import MapStream from "./components/MapStream";
import { useGeminiStream } from "./hooks/useGeminiStream";
import { useOverlay } from "./hooks/useOverlay";
import { GeminiChunk } from "./hooks/usePromptHistory";

type PromptType = "summary" | "solution" | "report";

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterParams>({
    region: "",
    type: "",
    status: "",
  });

  const [prompt, setPrompt] = useState("");
  const [summary, setSummary] = useState("");
  const [promptType, setPromptType] = useState<PromptType>("summary");
  const [history, setHistory] = useState<GeminiChunk[]>([]);

  const { generate } = useGeminiStream();
  const { overlays, extractOverlaysFromText, clearOverlays } = useOverlay();

  const handleFilter = (f: FilterParams) => {
    setFilters(f);
  };

  const handlePrompt = async (p: string, type: PromptType = "summary") => {
    setPrompt(p);
    setPromptType(type);
    clearOverlays();
    const result = await generate(p);
    setSummary(result);
    extractOverlaysFromText(result);

    const chunk: GeminiChunk = {
      prompt: p,
      response: result,
      timestamp: Date.now(),
    };
    setHistory((prev) => [chunk, ...prev]);
  };

  const handleHistorySelect = (chunk: GeminiChunk) => {
    setPrompt(chunk.prompt);
    setSummary(chunk.response);
    setPromptType("summary"); // or infer from chunk if stored
    clearOverlays();
    extractOverlaysFromText(chunk.response);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>InsightHubGH</h2>
      <FilterPanel onFilter={handleFilter} />
      <PromptBuilderPanel setPrompt={(p) => handlePrompt(p, "summary")} region={filters.region} />
      {promptType === "report" ? (
        <InsightReport content={summary} />
      ) : promptType === "solution" ? (
        <InsightSolutions content={summary} />
      ) : (
        <InsightSummary summary={summary} />
      )}
      <MapStream overlays={overlays} />
      <InsightHistoryPanel history={history} onSelect={handleHistorySelect} />
    </div>
  );
};

export default App;