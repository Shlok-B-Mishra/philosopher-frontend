// src/components/IframePlayer.tsx
'use client';

import { useState, useEffect } from 'react';

type Props = {
  embedUrl: string;
};

export default function IframePlayer({ embedUrl }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mt-12">
        <p className="text-gray-400">Loading Livestream Player…</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-4">Livestream</h2>
      <div className="aspect-video relative">
        <iframe
          src={embedUrl}
          allowFullScreen
          allow="autoplay; encrypted-media; picture-in-picture; camera; microphone"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
