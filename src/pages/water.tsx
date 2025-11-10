// InsightHubGH/frontend/src/components/WaterOverlay.tsx
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsNHNhbiIsImEiOiJjbWhud2N1MmswNXJvMmlyemJka3R1dzh5In0.yWoYZUANy6cN_QlAnSOkhg'; // your working token

const waterPolygon = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.20, 5.68],
            [-0.22, 5.68],
            [-0.22, 5.70],
            [-0.20, 5.70],
            [-0.20, 5.68],
          ],
        ],
      },
      properties: { name: 'Water Body A' },
    },
  ],
};

export default function WaterOverlay() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-0.21, 5.69],
      zoom: 13,
    });

    map.on('load', () => {
      map.addSource('water', {
        type: 'geojson',
        data: waterPolygon,
      });

      map.addLayer({
        id: 'water-fill',
        type: 'fill',
        source: 'water',
        paint: {
          'fill-color': '#3399ff',
          'fill-opacity': 0.5,
        },
      });

      map.addLayer({
        id: 'water-outline',
        type: 'line',
        source: 'water',
        paint: {
          'line-color': '#0066cc',
          'line-width': 2,
        },
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: '#eef',
      }}
    >
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          border: '4px dashed blue',
        }}
      />
    </div>
  );
}