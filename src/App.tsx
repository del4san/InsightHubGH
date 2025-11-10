import { useState } from "react";
import { useGeminiStream } from "./hooks/useGeminiStream";
import { useOverlay } from "./hooks/useOverlay";
import { GeminiChunk, FilterParams } from "./types";
import Map from "./map/Map";
import Prompt from "./prompt/Prompt";

export default function App() {
  const [history, setHistory] = useState<GeminiChunk[]>([]);
  const { sendPrompt } = useGeminiStream();
  const { overlays, extractOverlaysFromText, clearOverlays } = useOverlay();

  const handleFilter = async (filter: FilterParams) => {
    clearOverlays();
    setHistory([]);

    const stream = await sendPrompt(filter.prompt);
    for await (const chunk of stream) {
      setHistory((prev) => [...prev, chunk]);
      extractOverlaysFromText(chunk.text);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="h-[40%] min-h-[300px] border-b border-gray-300">
        <Prompt onFilter={handleFilter} />
      </div>
      <div className="flex-1">
        <Map overlays={overlays} />
      </div>
    </div>
  );
}