// src/pages/index.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const MapStream = dynamic(() => import('../components/MapStream'), { ssr: false });

export default function HomePage() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <MapStream />
    </main>
  );
}