import { useState } from 'react';
import { useGeminiStream } from '@/hooks/useGeminiStream';
import { useOverlay } from '@/hooks/useOverlay';

type GeminiChunk = {
  text: string;
};

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
    } catch (error) {
      console.error('Gemini stream error:', error);
    }
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">InsightHubGH</h1>

      <PromptInput onSubmit={handlePrompt} />

      <section className="mt-6 space-y-2">
        {history.map((chunk, index) => (
          <p key={index} className="text-gray-800">
            {chunk.text}
          </p>
        ))}
      </section>

      {overlays.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold">Extracted Overlays</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {overlays.map((o, i) => (
              <li key={i}>{JSON.stringify(o)}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};

export default App;

const PromptInput = ({ onSubmit }: { onSubmit: (prompt: string) => void }) => {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Ask Gemini something..."
        className="flex-1 border px-3 py-2 rounded"
      />
      <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
};