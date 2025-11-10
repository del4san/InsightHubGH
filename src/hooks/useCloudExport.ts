import React, { useState, useCallback } from 'react';

export interface ExportPayload {
  format: 'geojson' | 'csv';
  regionId: string;
  data: object;
}

const CloudExportButton: React.FC = () => {
  const [format, setFormat] = useState<'geojson' | 'csv'>('geojson');
  const [regionId, setRegionId] = useState('region-001');
  const [data, setData] = useState<object>({});
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const exportToCloud = useCallback(async (payload: ExportPayload): Promise<boolean> => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.insighthubgh.com/export', {
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

  const handleExport = async () => {
    setStatus('uploading');
    const success = await exportToCloud({ format, regionId, data });
    setStatus(success ? 'success' : 'error');
  };

  return (
    <div>
      <h3>Cloud Export</h3>
      <select value={format} onChange={(e) => setFormat(e.target.value as 'geojson' | 'csv')}>
        <option value="geojson">GeoJSON</option>
        <option value="csv">CSV</option>
      </select>
      <button onClick={handleExport}>Export</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default CloudExportButton;