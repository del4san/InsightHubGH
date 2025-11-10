import React, { useState, useEffect } from 'react';
import { useGeminiAlerts } from '../../hooks/useGeminiAlerts';

const AlertPanel: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);
  const { alerts, addAlert, clearAlerts, getAlerts } = useGeminiAlerts();

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      // Simulate alert fetch or trigger
      addAlert({
        id: 'init',
        message: 'Gemini alert system initialized.',
        severity: 'info',
      });
    }
    setLoading(false);
  }, []);

  if (!visible || alerts.length === 0) return null;

  return (
    <div style={{ padding: '1rem', background: '#fef3c7', border: '1px solid #f59e0b' }}>
      <h3>Gemini Alerts</h3>
      {loading ? (
        <p>Loading alerts...</p>
      ) : (
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>
              <strong>{alert.severity.toUpperCase()}:</strong> {alert.message}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setVisible(false)}>Dismiss</button>
      <button onClick={clearAlerts}>Clear All</button>
    </div>
  );
};

export default AlertPanel;