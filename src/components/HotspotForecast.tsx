import React, { useState } from 'react';
import { useHotspotPrediction } from '../hooks/useHotspotPrediction';

const HotspotForecast: React.FC = () => {
  const [regionId, setRegionId] = useState('region-001');
  const [date, setDate] = useState('2025-11-07');
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const { predictHotspot } = useHotspotPrediction();

  const fetchPrediction = async () => {
    setLoading(true);
    const result = await predictHotspot({ regionId, date });
    setPrediction(result);
    setLoading(false);
  };

  return (
    <div>
      <h3>Hotspot Forecast</h3>
      <input
        type="text"
        value={regionId}
        onChange={(e) => setRegionId(e.target.value)}
        placeholder="Region ID"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={fetchPrediction}>Get Forecast</button>
      <p>{loading ? 'Loading...' : prediction}</p>
    </div>
  );
};

export default HotspotForecast;