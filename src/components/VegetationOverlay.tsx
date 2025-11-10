import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

type Props = {
  map: mapboxgl.Map | null;
};

const vegetationPolygon = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.24, 5.66],
            [-0.24, 5.70],
            [-0.20, 5.70],
            [-0.20, 5.66],
            [-0.24, 5.66],
          ],
        ],
      },
      properties: { name: 'Vegetation Zone A' },
    },
  ],
};

export default function VegetationOverlay({ map }: Props) {
  useEffect(() => {
    if (!map || !map.isStyleLoaded()) return;

    if (!map.getSource('vegetation')) {
      map.addSource('vegetation', {
        type: 'geojson',
        data: vegetationPolygon,
      });

      map.addLayer({
        id: 'vegetation-fill',
        type: 'fill',
        source: 'vegetation',
        paint: {
          'fill-color': '#66cc66',
          'fill-opacity': 0.4,
        },
      });

      map.addLayer({
        id: 'vegetation-outline',
        type: 'line',
        source: 'vegetation',
        paint: {
          'line-color': '#228B22',
          'line-width': 2,
        },
      });
    }
  }, [map]);

  return null;
}