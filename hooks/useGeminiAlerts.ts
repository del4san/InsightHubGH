import { useState, useEffect } from 'react';

export interface GeminiAlert {
  id: string;
  message: string;
  severity: 'info' | 'warning' | 'error';
  timestamp?: string;
}

export function useGeminiAlerts() {
  const [alerts, setAlerts] = useState<GeminiAlert[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('geminiAlerts');
    if (stored) {
      try {
        setAlerts(JSON.parse(stored));
      } catch {
        localStorage.removeItem('geminiAlerts');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('geminiAlerts', JSON.stringify(alerts));
  }, [alerts]);

  function addAlert(alert: GeminiAlert) {
    const timestamped = { ...alert, timestamp: new Date().toISOString() };
    setAlerts((prev) => [...prev, timestamped]);
  }

  function clearAlerts() {
    setAlerts([]);
    localStorage.removeItem('geminiAlerts');
  }

  function getAlerts(): GeminiAlert[] {
    return [...alerts];
  }

  return {
    alerts,
    addAlert,
    clearAlerts,
    getAlerts,
  };
}