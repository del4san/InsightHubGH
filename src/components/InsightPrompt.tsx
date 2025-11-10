import React, { useState } from 'react';
import { useGeminiInsights } from '../hooks/useGeminiInsights';

const InsightPrompt: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const { fetchInsights } = useGeminiInsights();

  const ask = async () => {
    const answer = await fetchInsights(prompt);
    setResponse(answer);
  };

  return (
    <div>
      <h3>Gemini Insight Prompt</h3>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
      />
      <button onClick={ask}>Get Insight</button>
      <p>{response}</p>
    </div>
  );
};

export default InsightPrompt;