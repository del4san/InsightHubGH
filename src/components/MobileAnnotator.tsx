import React, { useState } from 'react';
import { useMobileAnnotation } from '../hooks/useMobileAnnotation';

const MobileAnnotator: React.FC<{ lat: number; lon: number }> = ({ lat, lon }) => {
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('');

  const save = async () => {
    const token = localStorage.getItem('token')!;
    const result = await useMobileAnnotation(lat, lon, note, token);
    setStatus(result);
    setNote('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h4>🧭 Add Annotation</h4>
      <textarea
        placeholder="Your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: '100%', height: '80px' }}
      />
      <button onClick={save}>Save Annotation</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default MobileAnnotator;