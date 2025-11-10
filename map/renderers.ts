import L from 'leaflet';

export function renderClusters(data: any): L.Layer {
  const layerGroup = L.layerGroup();
  data.forEach((point: any) => {
    const marker = L.marker([point.lat, point.lng], {
      title: point.label || 'Cluster',
    });
    layerGroup.addLayer(marker);
  });
  return layerGroup;
}

export function renderWaterBodies(data: any): L.Layer {
  return L.geoJSON(data, {
    style: { color: '#00BFFF', weight: 2 },
  });
}

export function renderVegetation(data: any): L.Layer {
  return L.geoJSON(data, {
    style: { color: '#228B22', weight: 2 },
  });
}

export function renderElevation(data: any): L.Layer {
  return L.geoJSON(data, {
    style: { color: '#8B4513', weight: 2 },
  });
}

export function renderBOQOverlay(data: any): L.Layer {
  return L.geoJSON(data, {
    style: { color: '#FFD700', weight: 2, dashArray: '4' },
  });
}