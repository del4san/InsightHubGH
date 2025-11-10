import { useCallback } from 'react';

export interface AuditLog {
  timestamp: string;
  action: string;
  user: string;
  details?: string;
}

export function useAuditLogs() {
  const fetchAuditLogs = useCallback(async (): Promise<AuditLog[]> => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.insighthubgh.com/audit-logs', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) return [];
      return await response.json();
    } catch {
      return [];
    }
  }, []);

  return { fetchAuditLogs };
}