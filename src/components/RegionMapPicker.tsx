import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const regions = [
  { name: "Accra", lat: 5.560, lng: -0.205 },
  { name: "Kumasi", lat: 6.690, lng: -1.620 },
  { name: "Tamale", lat: 9.400, lng: -0.840 },
  { name: "Takoradi", lat: 4.910, lng: -1.760 },
];

export function RegionMapPicker({ onSelect }: { onSelect: (region: string) => void }) {
  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Select Region</h3>
      <MapContainer center={[7.5, -1.0]} zoom={6} style={{ height: "300px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {regions.map((r) => (
          <Marker key={r.name} position={[r.lat, r.lng]} eventHandlers={{ click: () => onSelect(r.name) }}>
            <Popup>{r.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}