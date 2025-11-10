import { useState, useEffect } from 'react';

export interface GeminiChunk {
  role: 'user' | 'model';
  content: string;
  timestamp?: string;
}

export interface GeminiOverlayItem {
  id: string;
  label: string;
  location: {
    lat: number;
    lng: number;
  };
  elevation_m?: number;
  quantity?: number;
  unit?: string;
  cost_usd?: number;
  color?: string;
  emoji?: string;
  count?: number;
  name?: string;
  linkedAnnotationId?: string;
}

export function usePromptHistory() {
  const [history, setHistory] = useState<GeminiChunk[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('promptHistory');
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch {
        localStorage.removeItem('promptHistory');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('promptHistory', JSON.stringify(history));
  }, [history]);

  function addChunk(chunk: GeminiChunk) {
    const timestamped = { ...chunk, timestamp: new Date().toISOString() };
    setHistory((prev) => [...prev, timestamped]);
  }

  function clearHistory() {
    setHistory([]);
    localStorage.removeItem('promptHistory');
  }

  function getHistory(): GeminiChunk[] {
    return [...history];
  }

  return {
    history,
    addChunk,
    clearHistory,
    getHistory,
  };
}