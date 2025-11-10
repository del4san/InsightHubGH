import { useState } from 'react';

export const useGeminiInsights = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchInsights = async (prompt: string) => {
    setResponse('');
    setLoading(true);

    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      setLoading(false);
      throw new Error('No response stream');
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      setResponse((prev) => prev + chunk);
    }

    setLoading(false);
  };

  return { response, loading, fetchInsights };
};