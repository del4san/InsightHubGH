import React, { useState } from 'react';

interface Props {
  context: string;
}

const SummaryPanel: React.FC<Props> = ({ context }) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    setLoading(true);
    const res = await fetch('/api/gemini/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ context }),
    });
    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={summarize} disabled={loading}>
        {loading ? 'Summarizing...' : 'Summarize Map Data'}
      </button>
      {summary && (
        <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
          <strong>🧠 Gemini Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default SummaryPanel;