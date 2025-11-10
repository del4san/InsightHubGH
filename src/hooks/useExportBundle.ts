import { useCallback } from 'react';

export interface BundlePayload {
  regionIds: string[];
  format: 'geojson' | 'csv';
}

export function useExportBundle() {
  const exportBundle = useCallback(async (payload: BundlePayload): Promise<boolean> => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.insighthubgh.com/export-bundle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      return response.ok;
    } catch {
      return false;
    }
  }, []);

  return { exportBundle };
}