import React, { useState } from "react";
import { useGeminiStream } from "@/hooks/useGeminiStream";
import { buildRegionPrompt } from "@/utils/regionPrompt";
import Markdown from "react-markdown";

type Region = {
  name: string;
  traits: string;
};

type Props = {
  regions: Region[];
};

const RegionInsightPanel: React.FC<Props> = ({ regions }) => {
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);
  const { sendPrompt } = useGeminiStream();

  const handleGenerate = async () => {
    setLoading(true);
    setInsight("");

    const prompt = buildRegionPrompt(regions);
    for await (const chunk of sendPrompt(prompt)) {
      setInsight((prev) => prev + chunk);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">🧠 Regional Insight Generator</h2>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Insight"}
      </button>

      <div className="mt-6 prose max-w-none">
        {insight ? <Markdown>{insight}</Markdown> : <p className="text-gray-500">No insight yet.</p>}
      </div>
    </div>
  );
};

export default RegionInsightPanel;