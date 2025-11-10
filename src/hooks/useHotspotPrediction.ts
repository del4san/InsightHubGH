import { useCallback } from 'react';

export interface HotspotPayload {
  regionId: string;
  date: string;
}

export function useHotspotPrediction() {
  const predictHotspot = useCallback(async (payload: HotspotPayload): Promise<string> => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.insighthubgh.com/hotspot-predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) return 'Prediction failed';
      const result = await response.json();
      return result.forecast || 'No prediction available';
    } catch {
      return 'Error fetching prediction';
    }
  }, []);

  return { predictHotspot };
}