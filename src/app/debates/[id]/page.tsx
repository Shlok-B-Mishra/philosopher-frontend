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
  const id = (params?.id as string)?.replace(/\.html$/, '');
  const [debate, setDebate] = useState<Debate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://127.0.0.1:8000/api/v1/debates/${id}/`)
      .then(res => res.ok ? res.json() : Promise.reject('Not found'))
      .then(data => {
        setDebate(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-20 text-center text-white">Loading...</div>;
  }

  if (!debate) {
    return <div className="p-20 text-center text-red-500">Debate not found.</div>;
  }

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-4">{debate.title}</h1>
      <p className="text-gray-400 mb-8">Hosted by: {debate.creator.username}</p>
      <IframePlayer embedUrl={debate.livepeer_embed_url} />
    </div>
  );
}
