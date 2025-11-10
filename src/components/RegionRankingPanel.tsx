import React, { useState } from 'react';
import { useRegionRanking } from '../hooks/useRegionRanking';

const RegionRankingPanel: React.FC<{ regions: any[] }> = ({ regions }) => {
  const [ranked, setRanked] = useState<any[]>([]);

  const rank = async () => {
    const token = localStorage.getItem('token')!;
    const result = await useRegionRanking(regions, token);
    setRanked(result);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h4>📊 Predictive Region Ranking</h4>
      <button onClick={rank}>Rank Regions</button>
      {ranked.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Total Points</th>
              <th>Unique Titles</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((r, i) => (
              <tr key={i}>
                <td>Region {r.regionId}</td>
                <td>{r.totalPoints}</td>
                <td>{r.uniqueTitles}</td>
                <td>{r.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RegionRankingPanel;