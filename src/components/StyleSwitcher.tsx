import { useState } from 'react';

type Props = {
  onChange: (styleUrl: string) => void;
};

export default function StyleSwitcher({ onChange }: Props) {
  const [style, setStyle] = useState('streets');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setStyle(selected);
    const styleUrl =
      selected === 'satellite'
        ? 'mapbox://styles/mapbox/satellite-streets-v12'
        : 'mapbox://styles/mapbox/streets-v12';
    onChange(styleUrl);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#fff',
        padding: '8px',
        border: '2px solid #333',
        borderRadius: '6px',
        zIndex: 10000,
      }}
    >
      <label>
        Map Style:{' '}
        <select value={style} onChange={handleChange}>
          <option value="streets">Streets</option>
          <option value="satellite">Satellite</option>
        </select>
      </label>
    </div>
  );
}