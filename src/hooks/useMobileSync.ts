import { useEffect } from 'react';

export const useMobileSync = (onUpdate: (data: any) => void) => {
  useEffect(() => {
    const source = new EventSource('/api/sync/stream');
    source.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === 'sync') onUpdate(data.message);
    };
    return () => source.close();
  }, [onUpdate]);
};