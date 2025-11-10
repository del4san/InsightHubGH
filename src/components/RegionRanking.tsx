import ReactMarkdown from "react-markdown";
import { useGeminiStream } from "@/hooks/useGeminiStream";
import { buildRegionRankingPrompt } from "@/utils/regionPrompt";

const overlays = {
  Adenta: "high green space, moderate infrastructure",
  Madina: "dense population, poor road network",
  "East Legon": "strong commercial activity, high land value",
  Osu: "tourism hub, aging infrastructure",
  Ridge: "diplomatic zone, low residential density",
};

export default function RegionRanking() {
  const { response, sendPrompt } = useGeminiStream();

  const handleClick = () => {
    const prompt = buildRegionRankingPrompt(overlays);
    sendPrompt(prompt);
  };

  return (
    <div>
      <button onClick={handleClick}>📊 Rank Regions</button>
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
}