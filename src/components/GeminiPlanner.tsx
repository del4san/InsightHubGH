import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

type Props = {
  map: mapboxgl.Map | null;
};

const planningZones = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.21, 5.68],
            [-0.21, 5.72],
            [-0.17, 5.72],
            [-0.17, 5.68],
            [-0.21, 5.68],
          ],
        ],
      },
      properties: { rank: 1, prompt: 'High priority zone for housing development' },
    },
  ],
};

export default function GeminiPlanner({ map }: Props) {
  useEffect(() => {
    if (!map || !map.isStyleLoaded()) return;

    if (!map.getSource('planning')) {
      map.addSource('planning', {
        type: 'geojson',
        data: planningZones,
      });

      map.addLayer({
        id: 'planning-fill',
        type: 'fill',
        source: 'planning',
        paint: {
          'fill-color': '#ffcc00',
          'fill-opacity': 0.3,
        },
      });

      map.addLayer({
        id: 'planning-outline',
        type: 'line',
        source: 'planning',
        paint: {
          'line-color': '#ffaa00',
          'line-width': 2,
        },
      });
    }
  }, [map]);

  return null;
}