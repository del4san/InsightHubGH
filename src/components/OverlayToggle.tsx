import { useState } from 'react';

type OverlayToggleProps = {
  onToggle: (layerId: string, visible: boolean) => void;
};

export default function OverlayToggle({ onToggle }: OverlayToggleProps) {
  const [layers, setLayers] = useState({
    water: true,
    vegetation: true,
    planning: true,
  });

  const toggleLayer = (layerId: keyof typeof layers) => {
    const updated = { ...layers, [layerId]: !layers[layerId] };
    setLayers(updated);
    onToggle(layerId, updated[layerId]);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: '#fff',
        padding: '10px',
        border: '2px solid #333',
        borderRadius: '6px',
        zIndex: 10000,
      }}
    >
      <h4 style={{ marginBottom: '8px' }}>Overlay Controls</h4>
      <label>
        <input
          type="checkbox"
          checked={layers.water}
          onChange={() => toggleLayer('water')}
        />
        Water
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={layers.vegetation}
          onChange={() => toggleLayer('vegetation')}
        />
        Vegetation
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={layers.planning}
          onChange={() => toggleLayer('planning')}
        />
        Gemini Planning Zones
      </label>
    </div>
  );
}