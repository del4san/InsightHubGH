import React from 'react';

const ExportButtons: React.FC = () => {
  const handleExport = (type: 'geojson' | 'csv') => {
    window.open(`/api/export/${type}`, '_blank');
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={() => handleExport('geojson')}>Export GeoJSON</button>
      <button onClick={() => handleExport('csv')}>Export CSV</button>
    </div>
  );
};

export default ExportButtons;