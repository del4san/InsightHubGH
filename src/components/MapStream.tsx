import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { GeminiOverlayItem } from "../hooks/usePromptHistory";

interface Props {
  overlays: GeminiOverlayItem[];
}

const MapStream: React.FC<Props> = ({ overlays }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!token || !token.startsWith("pk.")) {
    console.error("⚠️ Mapbox token is missing or invalid");
    return <div style={{ color: "red" }}>Mapbox token is missing or invalid.</div>;
  }

  mapboxgl.accessToken = token;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 2,
    });

    map.addControl(new mapboxgl.NavigationControl());
    mapRef.current = map;

    return () => map.remove();
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Clear existing markers
    const markers: mapboxgl.Marker[] = [];

    overlays.forEach((item) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.width = "12px";
      el.style.height = "12px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = item.color || "#007cbf";

      const marker = new mapboxgl.Marker(el)
        .setLngLat([item.location.lng, item.location.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <strong>${item.label}</strong><br/>
            ${item.count ? `Count: ${item.count}<br/>` : ""}
            ${item.elevation_m ? `Elevation: ${item.elevation_m}m<br/>` : ""}
            ${item.emoji ? `${item.emoji}` : ""}
          `)
        )
        .addTo(map);

      markers.push(marker);
    });

    return () => markers.forEach((m) => m.remove());
  }, [overlays]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "400px", marginTop: "1rem" }}
    />
  );
};

export default MapStream;