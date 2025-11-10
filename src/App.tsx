import { useState } from 'react';
import { useGeminiStream } from '@/hooks/useGeminiStream';
import { useOverlay } from '@/hooks/useOverlay';

const App = () => {
  const [history, setHistory] = useState<GeminiChunk[]>([]);
  const { sendPrompt } = useGeminiStream();
  const { overlays, extractOverlaysFromText, clearOverlays } = useOverlay();

  const handlePrompt = async (prompt: string) => {
    setHistory([]);
    clearOverlays();

    try {
      for await (const chunk of sendPrompt(prompt)) {
        setHistory(prev => [...prev, chunk]);
        extractOverlaysFromText(chunk.text);
      }
    } catch (err) {
      console.warn('Error streaming Gemini response:', err);
    }
  };

  // Your component JSX goes here
};

export default App;