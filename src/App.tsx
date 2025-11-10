import { useGeminiStream } from '@/hooks/useGeminiStream';
import { useOverlay } from '@/hooks/useOverlay';

const App = () => {
  const [history, setHistory] = useState<GeminiChunk[]>([]);
  const { sendPrompt } = useGeminiStream();
  const { overlays, extractOverlaysFromText, clearOverlays } = useOverlay();

  const handlePrompt = async (prompt: string) => {
    setHistory([]); // Clear previous history
    clearOverlays(); // Reset overlays

    try {
      for await (const chunk of sendPrompt(prompt)) {
        setHistory(prev => [...prev, chunk]);
        extractOverlaysFromText(chunk.text);
      }
    } catch (error) {
      console.error('Gemini stream error:', error);
    }
  };

  // ...rest of your component
};