import React, { useState } from "react";

export function ZipExportPanel() {
  const [projectId, setProjectId] = useState("");

  function handleExport() {
    const url = `/api/zip-export?projectId=${projectId}`;
    window.open(url, "_blank");
  }

  return (
    <div style={{ marginTop: "24px" }}>
      <h3>ZIP Export</h3>
      <input
        type="text"
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
        style={{ marginRight: "8px" }}
      />
      <button onClick={handleExport}>Download ZIP</button>
    </div>
  );
}