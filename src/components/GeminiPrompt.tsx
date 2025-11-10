import { useEffect, useState } from 'react';

type GeminiPromptProps = {
  region: string;
  prompt: string;
};

export default function GeminiPrompt({ region, prompt }: GeminiPromptProps) {
  const [response, setResponse] = useState<string>('Generating planning insights…');

  useEffect(() => {
    const injectPrompt = async () => {
      try {
        const payload = {
          messages: [
            {
              role: 'user',
              content: `You are a planning assistant. Analyze the following region: ${region}. Prompt: ${prompt}. Provide housing development suggestions, infrastructure priorities, and environmental considerations.`,
            },
          ],
        };

        const res = await fetch('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        setResponse(data.content || 'No response received.');
      } catch (err) {
        setResponse('Error fetching Gemini response.');
      }
    };

    injectPrompt();
  }, [region, prompt]);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#fff',
        padding: '12px',
        border: '2px solid #333',
        borderRadius: '6px',
        zIndex: 10000,
        width: '320px',
        maxHeight: '40vh',
        overflowY: 'auto',
      }}
    >
      <h4>Gemini Planning Assistant</h4>
      <p>
        <strong>Region:</strong> {region}
        <br />
        <strong>Prompt:</strong> {prompt}
      </p>
      <hr />
      <div style={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}>{response}</div>
    </div>
  );
}