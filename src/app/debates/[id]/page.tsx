'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import IframePlayer from '@/components/IframePlayer';

type Debate = {
  title: string;
  creator: { username: string };
  livepeer_embed_url: string;
};

export default function DebateDetailPage() {
  const params = useParams();
  // Clean up ".html" if somehow present from a legacy link
  const id = (params?.id as string || '').replace(/\.html$/, '');
  const [debate, setDebate] = useState<Debate | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://127.0.0.1:8000/api/v1/debates/${id}/`)
      .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch debate details'))
      .then(setDebate)
      .catch(console.error);
  }, [id]);

  if (!debate) return <div className="text-center p-12 text-white">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">{debate.title}</h1>
        <p className="text-lg text-gray-400">Hosted by: {debate.creator.username}</p>
        <IframePlayer embedUrl={debate.livepeer_embed_url} />
      </div>
    </div>
  );
}
