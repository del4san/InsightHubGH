import React, { useState } from 'react';
import { useGeminiStream } from '../hooks/useGeminiStream';

const GeminiChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [submittedPrompt, setSubmittedPrompt] = useState('');

  const stream = useGeminiStream(submittedPrompt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedPrompt(input);
  };

  return (
    <div>
      <h3>Gemini Chat</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gemini..."
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <h4>Response</h4>
        <pre>{stream}</pre>
      </div>
    </div>
  );
};

export default GeminiChat;