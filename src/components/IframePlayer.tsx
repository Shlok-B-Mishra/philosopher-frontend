// src/components/IframePlayer.tsx

'use client';

import { useState, useEffect } from 'react';

interface IframePlayerProps {
  embedUrl: string;
}

export default function IframePlayer({ embedUrl }: IframePlayerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Loading Player...</p>
      </div>
    );
  }

  return (
    <div className="aspect-video relative">
      <iframe
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        allowFullScreen
        allow="autoplay; encrypted-media; picture-in-picture; camera; microphone"
      />
    </div>
  );
}
