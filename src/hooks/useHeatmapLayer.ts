import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export const useHeatmapLayer = (map: mapboxgl.Map | null, geojson: any) => {
  useEffect(() => {
    if (!map || !geojson) return;

    if (map.getSource('heatmap')) {
      map.getSource('heatmap').setData(geojson);
    } else {
      map.addSource('heatmap', {
        type: 'geojson',
        data: geojson,
      });

      map.addLayer({
        id: 'heatmap-layer',
        type: 'heatmap',
        source: 'heatmap',
        maxzoom: 15,
        paint: {
          'heatmap-weight': ['interpolate', ['linear'], ['get', 'density'], 0, 0, 6, 1],
          'heatmap-intensity': 1,
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(0,0,255,0)',
            0.2, 'blue',
            0.4, 'cyan',
            0.6, 'lime',
            0.8, 'yellow',
            1, 'red'
          ],
          'heatmap-radius': 20,
          'heatmap-opacity': 0.6,
        },
      });
    }
  }, [map, geojson]);
};