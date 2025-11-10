import { useEffect, useState } from 'react';

const STORAGE_KEY = 'insighthubgh_offline_annotations';

export const useOfflineAnnotations = () => {
  const [queue, setQueue] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setQueue(JSON.parse(stored));
  }, []);

  const addAnnotation = (annotation: any) => {
    const updated = [...queue, annotation];
    setQueue(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const syncAnnotations = async (token: string) => {
    for (const annotation of queue) {
      await fetch('/api/annotations/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(annotation),
      });
    }
    localStorage.removeItem(STORAGE_KEY);
    setQueue([]);
  };

  return { queue, addAnnotation, syncAnnotations };
};