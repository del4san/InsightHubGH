import React from "react";

type ChunkPreviewPanelProps = {
  title: string;
  children: React.ReactNode;
};

export default function ChunkPreviewPanel({ title, children }: ChunkPreviewPanelProps) {
  return (
    <div className="chunk-preview-panel">
      <h2>{title}</h2>
      {children}
    </div>
  );
}