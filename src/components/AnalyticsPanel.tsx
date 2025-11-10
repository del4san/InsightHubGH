import React, { useEffect, useState } from 'react';

const AnalyticsPanel: React.FC = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('/api/stats');
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, []);

  if (!stats) return <p>Loading analytics...</p>;

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', background: '#f4f6f7', borderRadius: '8px' }}>
      <h4>📊 InsightHubGH Analytics</h4>
      <ul>
        <li>Clusters: {stats.clusters}</li>
        <li>Water Bodies: {stats.waterBodies}</li>
        <li>Housing Zones: {stats.housingZones}</li>
        <li>Roads: {stats.roads}</li>
        <li>Last Export: {new Date(stats.lastExport).toLocaleString()}</li>
        <li>Sync Status: {stats.syncStatus}</li>
      </ul>
    </div>
  );
};

export default AnalyticsPanel;