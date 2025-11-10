import { useCallback } from 'react';

export function useGeminiInsights() {
  const fetchInsights = useCallback(async (prompt: string): Promise<string> => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.insighthubgh.com/gemini-insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) return 'Insight generation failed';
      const result = await response.json();
      return result.insight || 'No insight available';
    } catch {
      return 'Error fetching insight';
    }
  }, []);

  return { fetchInsights };
}