import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { GeminiOverlay } from "../types";
import { renderClusters } from "../renderers/renderClusters";
import { applyLayerControl } from "../layerControl"; // optional

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function Map({ overlays }: { overlays: GeminiOverlay[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [0, 0],
      zoom: 2,
    });

    mapInstance.current.on("load", () => {
      renderClusters(mapInstance.current!, overlays);
      applyLayerControl?.(mapInstance.current!);
    });
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
}