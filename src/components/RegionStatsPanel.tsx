import React, { useState } from 'react';
import { useRegionStats } from '../hooks/useRegionStats';

const RegionStatsPanel: React.FC<{ polygon: any }> = ({ polygon }) => {
  const [stats, setStats] = useState<any>(null);

  const fetchStats = async () => {
    const token = localStorage.getItem('token')!;
    const result = await useRegionStats(polygon, token);
    setStats(result);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h4>📊 Region Stats</h4>
      <button onClick={fetchStats}>Analyze Region</button>
      {stats && (
        <ul>
          <li>Total Points: {stats.totalPoints}</li>
          <li>Unique Titles: {stats.titles.join(', ')}</li>
          <li>Centroid: {stats.centroid.join(', ')}</li>
        </ul>
      )}
    </div>
  );
};

export default RegionStatsPanel;