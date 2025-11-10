// InsightHubGH/frontend/src/components/ClusterMap.tsx
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVsNHNhbiIsImEiOiJjbWhud2N1MmswNXJvMmlyemJka3R1dzh5In0.yWoYZUANy6cN_QlAnSOkhg'; // your working token

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-0.19, 5.68] },
      properties: { title: 'Region A' },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-0.21, 5.70] },
      properties: { title: 'Region B' },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-0.18, 5.66] },
      properties: { title: 'Region C' },
    },
  ],
};

export default function ClusterMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-0.19, 5.68],
      zoom: 7,
    });

    map.on('load', () => {
      map.addSource('regions', {
        type: 'geojson',
        data: geojson,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'regions',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': '#51bbd6',
          'circle-radius': ['step', ['get', 'point_count'], 20, 5, 30, 10, 40],
        },
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'regions',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count'],
          'text-size': 12,
        },
      });

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'regions',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#f28cb1',
          'circle-radius': 6,
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
        backgroundColor: '#eee',
      }}
    >
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
          border: '4px dashed orange',
        }}
      />
    </div>
  );
}