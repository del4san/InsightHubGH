import React, { useState } from 'react';
import { useEmailExport } from '../hooks/useEmailExport';

const EmailExportForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const { sendEmail } = useEmailExport();

  const send = async () => {
    setStatus('sending');
    const success = await sendEmail({ recipient, subject, body });
    setStatus(success ? 'success' : 'error');
  };

  return (
    <div>
      <h3>Email Export</h3>
      <input
        type="email"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={send}>Send Email</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default EmailExportForm;