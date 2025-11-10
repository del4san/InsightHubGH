import React, { useState } from "react";
import { GeminiChunk } from "../hooks/usePromptHistory";

export function ExportPanel({ chunks }: { chunks: GeminiChunk[] }) {
  const [format, setFormat] = useState<"geojson" | "csv">("geojson");

  async function handleExport() {
    const res = await fetch("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chunks, format }),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = format === "geojson" ? "overlay.geojson" : "overlay.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div style={{ marginTop: "24px" }}>
      <h3>Export Overlays</h3>
      <label>
        <select value={format} onChange={(e) => setFormat(e.target.value as any)}>
          <option value="geojson">GeoJSON</option>
          <option value="csv">CSV</option>
        </select>
      </label>
      <button onClick={handleExport} style={{ marginLeft: "12px" }}>
        Download
      </button>
    </div>
  );
}