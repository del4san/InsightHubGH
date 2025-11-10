// src/map/layerControl.ts
import mapboxgl from 'mapbox-gl';

let initialized = false;

export function initLayerControl(map: mapboxgl.Map, overlays: Record<string, string>) {
  if (initialized) return;
  initialized = true;

  const controlContainer = document.createElement('div');
  controlContainer.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

  Object.entries(overlays).forEach(([label, layerId]) => {
    const button = document.createElement('button');
    button.textContent = label;
    button.onclick = () => {
      const visibility = map.getLayoutProperty(layerId, 'visibility');
      map.setLayoutProperty(layerId, 'visibility', visibility === 'visible' ? 'none' : 'visible');
    };
    controlContainer.appendChild(button);
  });

  map.addControl({
    onAdd: () => controlContainer,
    onRemove: () => {
      controlContainer.parentNode?.removeChild(controlContainer);
    }
  });
}