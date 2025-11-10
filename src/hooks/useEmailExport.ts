import { useCallback } from 'react';

export interface EmailPayload {
  recipient: string;
  subject: string;
  body: string;
}

export function useEmailExport() {
  const sendEmail = useCallback(async (payload: EmailPayload): Promise<boolean> => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.insighthubgh.com/email-export', {
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

  return { sendEmail };
}