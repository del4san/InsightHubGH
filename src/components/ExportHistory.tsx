import React, { useEffect, useState } from 'react';

const ExportHistory: React.FC = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/history/exports', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setHistory(data.history || []);
    };
    fetchHistory();
  }, []);

  return (
    <div style={{ marginTop: '1rem' }}>
      <h4>📦 Export History</h4>
      <ul>
        {history.map((entry, i) => (
          <li key={i}>
            <strong>{entry.user}</strong> — {entry.action} at {new Date(entry.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExportHistory;