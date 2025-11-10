import { useEffect } from 'react';

export const useSyncStream = (onSync: (msg: string) => void) => {
  useEffect(() => {
    const source = new EventSource('/api/sync/stream');
    source.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === 'sync') onSync(data.message);
    };
    return () => source.close();
  }, [onSync]);
};