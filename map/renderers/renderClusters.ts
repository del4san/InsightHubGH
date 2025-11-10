// src/map/renderers/renderClusters.ts
import mapboxgl from 'mapbox-gl';

export function renderClusters(map: mapboxgl.Map) {
  console.log('🧪 Rendering clusters...');

  if (map.getSource('clusters')) {
    console.log('ℹ️ Clusters source already exists');
    return;
  }

  map.addSource('clusters', {
    type: 'geojson',
    data: '/data/clusters.geojson', // make sure this file exists in public/data/
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50,
  });

  map.addLayer({
    id: 'cluster-circles',
    type: 'circle',
    source: 'clusters',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': '#51bbd6',
      'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
      'circle-opacity': 0.6,
    },
  });

  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'clusters',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12,
    },
    paint: {
      'text-color': '#ffffff',
    },
  });

  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'clusters',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#f28cb1',
      'circle-radius': 6,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff',
    },
  });

  console.log('✅ Clusters rendered');
}