'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Debate = {
  id: number;
  title: string;
};

export default function HomePage() {
  const [debates, setDebates] = useState<Debate[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/debates/')
      .then(res => res.ok ? res.json() : Promise.reject('API Error'))
      .then(setDebates)
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Philosopher Debates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {debates.map(debate => (
          <Link key={debate.id} href={`/debates/${debate.id}`} className="block">
            <div className="border border-gray-700 p-4 rounded-lg hover:border-yellow-400">
              <h2 className="text-xl">{debate.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
