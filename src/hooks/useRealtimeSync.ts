import { useEffect } from 'react';

export function useRealtimeSync(onUpdate: (data: any) => void) {
  useEffect(() => {
    const eventSource = new EventSource('/api/sync/stream');

    eventSource.onmessage = (e) => {
      try {
        const parsed = JSON.parse(e.data);
        onUpdate(parsed);
      } catch {
        console.warn('Invalid sync payload:', e.data);
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => eventSource.close();
  }, [onUpdate]);
}