import React, { useState } from 'react';
import { useGPSFilter } from '../hooks/useGPSFilter';

const GPSFilterButton: React.FC = () => {
  const [radiusKm, setRadiusKm] = useState(5);
  const [points, setPoints] = useState<string[]>([]);
  const { filterByGPS } = useGPSFilter();

  const filterNearby = async () => {
    const payload = {
      latitude: 5.6037,
      longitude: -0.1870,
      radiusKm,
    };

    const result = await filterByGPS(payload);
    setPoints(result);
  };

  return (
    <div>
      <h3>GPS Filter</h3>
      <input
        type="number"
        value={radiusKm}
        onChange={(e) => setRadiusKm(Number(e.target.value))}
        placeholder="Radius in km"
      />
      <button onClick={filterNearby}>Filter Nearby</button>
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default GPSFilterButton;