import React from 'react';

interface Props {
  toggleLayer: (layerId: string, visible: boolean) => void;
}

const LayerToggle: React.FC<Props> = ({ toggleLayer }) => {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const layerId = e.target.name;
    const visible = e.target.checked;
    toggleLayer(layerId, visible);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <label>
        <input type="checkbox" name="water-layer" defaultChecked onChange={handleToggle} />
        Water Bodies
      </label>
      <label>
        <input type="checkbox" name="housing-layer" defaultChecked onChange={handleToggle} />
        Housing Zones
      </label>
      <label>
        <input type="checkbox" name="roads-layer" defaultChecked onChange={handleToggle} />
        Roads
      </label>
    </div>
  );
};

export default LayerToggle;