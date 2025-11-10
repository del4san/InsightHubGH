import React, { useState } from 'react';
import { useRegionComparison } from '../hooks/useRegionComparison';

const RegionComparisonDashboard: React.FC<{ regions: any[] }> = ({ regions }) => {
  const [results, setResults] = useState<any[]>([]);

  const compare = async () => {
    const token = localStorage.getItem('token')!;
    const data = await useRegionComparison(regions, token);
    setResults(data);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h4>📍 Region Comparison</h4>
      <button onClick={compare}>Compare Regions</button>
      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Total Points</th>
              <th>Unique Titles</th>
              <th>Centroid</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>Region {r.regionId}</td>
                <td>{r.totalPoints}</td>
                <td>{r.uniqueTitles.join(', ')}</td>
                <td>{r.centroid.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RegionComparisonDashboard;