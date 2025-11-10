import { useEffect, useState } from 'react';

const OFFLINE_KEY = 'insighthubgh_offline_queue';

export const useOfflineQueue = () => {
  const [queue, setQueue] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(OFFLINE_KEY);
    if (stored) setQueue(JSON.parse(stored));
  }, []);

  const addToQueue = (action: any) => {
    const updated = [...queue, action];
    setQueue(updated);
    localStorage.setItem(OFFLINE_KEY, JSON.stringify(updated));
  };

  const flushQueue = async (token: string) => {
    for (const action of queue) {
      await fetch('/api/sync/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(action),
      });
    }
    localStorage.removeItem(OFFLINE_KEY);
    setQueue([]);
  };

  return { queue, addToQueue, flushQueue };
};