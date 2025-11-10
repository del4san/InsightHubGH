import React, { useState } from 'react';
import { useMobileSync } from '../hooks/useMobileSync';

const MobileSyncPanel: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState('');

  useMobileSync((msg) => {
    setLastUpdate(msg);
    // Trigger map refresh or overlay update here
  });

  return (
    <div style={{ padding: '1rem', fontSize: '0.9rem' }}>
      <strong>📡 Last Sync:</strong> {lastUpdate || 'Waiting...'}
    </div>
  );
};

export default MobileSyncPanel;