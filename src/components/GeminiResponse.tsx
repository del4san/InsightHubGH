// src/components/GeminiResponse.tsx

import React from "react";

interface GeminiResponseProps {
  response: string;
  loading: boolean;
}

const GeminiResponse: React.FC<GeminiResponseProps> = ({ response, loading }) => {
  return (
    <div className="gemini-response">
      {loading ? (
        <p>⏳ Thinking...</p>
      ) : response ? (
        <p dangerouslySetInnerHTML={{ __html: response }} />
      ) : (
        <p>🧠 Gemini responses will appear here.</p>
      )}
    </div>
  );
};

export default GeminiResponse;