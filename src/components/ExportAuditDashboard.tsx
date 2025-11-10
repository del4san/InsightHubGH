import React, { useState, useEffect } from 'react';
import { useAuditLogs } from '../hooks/useAuditLogs';

const ExportAuditDashboard: React.FC = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { fetchAuditLogs } = useAuditLogs();

  useEffect(() => {
    const loadLogs = async () => {
      setLoading(true);
      const result = await fetchAuditLogs();
      setLogs(result);
      setLoading(false);
    };

    loadLogs();
  }, [fetchAuditLogs]);

  return (
    <div>
      <h3>Export Audit Dashboard</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              <strong>{log.timestamp}</strong> — {log.action} by {log.user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExportAuditDashboard;