import React, { useState } from 'react';
import { usePlanningAssistant } from '../hooks/usePlanningAssistant';

const PlanningAssistantPanel: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const token = localStorage.getItem('token')!;
    const result = await usePlanningAssistant(token);
    setText(result);
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h4>🧠 Gemini Planning Assistant</h4>
      <button onClick={generate} disabled={loading}>
        {loading ? 'Analyzing...' : 'Generate Recommendations'}
      </button>
      {text && <pre style={{ whiteSpace: 'pre-wrap' }}>{text}</pre>}
    </div>
  );
};

export default PlanningAssistantPanel;