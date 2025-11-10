import { useCallback } from 'react';

export interface GPSFilterPayload {
  latitude: number;
  longitude: number;
  radiusKm: number;
}

export function useGPSFilter() {
  const filterByGPS = useCallback(async (payload: GPSFilterPayload): Promise<string[]> => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.insighthubgh.com/gps-filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) return [];
      return await response.json();
    } catch {
      return [];
    }
  }, []);

  return { filterByGPS };
}