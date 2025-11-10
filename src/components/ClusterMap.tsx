import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import GeminiPrompt from './GeminiPrompt';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-0.19, 5.68] },
      properties: { title: 'Region A', prompt: 'High priority zone for housing development' },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-0.21, 5.70] },
      properties: { title: 'Region B', prompt: 'Moderate priority zone with mixed terrain' },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-0.18, 5.66] },
      properties: { title: 'Region C', prompt: 'Low priority zone near water body' },
    },
  ],
};

export default function ClusterMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedRegion, setSelectedRegion] = useState<{ region: string; prompt: string } | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-0.20, 5.69],
      zoom: 9,
    });

    map.on('load', () => {
      map.addSource('regions', {
        type: 'geojson',
        data: geojson,
      });

      map.addLayer({
        id: 'region-points',
        type: 'circle',
        source: 'regions',
        paint: {
          'circle-color': '#f28cb1',
          'circle-radius': 8,
        },
      });

      // ✅ Use queryRenderedFeatures for reliable click detection
      map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['region-points'],
        });

        if (features.length > 0) {
          const { title, prompt } = features[0].properties as { title: string; prompt: string };
          console.log('Clicked:', title, prompt);
          setSelectedRegion({ region: title, prompt });
        }
      });

      map.on('mouseenter', 'region-points', () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'region-points', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {selectedRegion && (
        <GeminiPrompt region={selectedRegion.region} prompt={selectedRegion.prompt} />
      )}
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}