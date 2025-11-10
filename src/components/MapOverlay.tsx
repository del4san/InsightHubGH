import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

type MarkerData = { lat: number; lng: number; label: string };
type WaterBodyData = { lat: number; lng: number; label: string };

type MapOverlayProps = {
  markers: MarkerData[];
  waterBodies: WaterBodyData[];
};

function MapOverlay({ markers, waterBodies }: MapOverlayProps) {
  const map = useMap();

  useEffect(() => {
    const allPoints = [...markers, ...waterBodies];
    if (allPoints.length === 0) return;

    const latLngs = allPoints.map(p => L.latLng(p.lat, p.lng));
    const bounds = L.latLngBounds(latLngs);

    map.invalidateSize();

    if (latLngs.length === 1) {
      map.setView(latLngs[0], 13);
    } else {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [markers, waterBodies, map]);

  return (
    <>
      {markers.map((m, i) => (
        <Marker key={`marker-${i}`} position={[m.lat, m.lng]}>
          <Popup>{m.label}</Popup>
        </Marker>
      ))}
      {waterBodies.map((wb, i) => (
        <Marker key={`water-${i}`} position={[wb.lat, wb.lng]}>
          <Popup>{wb.label}</Popup>
        </Marker>
      ))}
    </>
  );
}

export default MapOverlay;