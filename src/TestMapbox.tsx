import React from "react";
import MapboxGL from "react-map-gl";

export default function TestMapbox() {
  return (
    <MapboxGL
      initialViewState={{ longitude: 0, latitude: 0, zoom: 2 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    />
  );
}