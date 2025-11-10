import React, { useState } from 'react';
import { useExportBundle } from '../hooks/useExportBundle';

const ExportBundleButton: React.FC = () => {
  const { exportBundle } = useExportBundle();
  const [format, setFormat] = useState<'geojson' | 'csv'>('geojson');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleExport = async () => {
    const payload = {
      regionIds: ['region-001', 'region-002'],
      format,
    };

    try {
      const success = await exportBundle(payload);
      setStatus(success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <h3>Export Bundle</h3>
      <select value={format} onChange={(e) => setFormat(e.target.value as 'geojson' | 'csv')}>
        <option value="geojson">GeoJSON</option>
        <option value="csv">CSV</option>
      </select>
      <button onClick={handleExport}>Export</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default ExportBundleButton;