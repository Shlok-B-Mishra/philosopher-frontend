'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

type Debate = { id: number; title: string; };

export default function Home() {
  const [debates, setDebates] = useState<Debate[]>([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/debates/')
      .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch debates'))
      .then(setDebates)
      .catch(console.error);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Philosopher Debates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {debates.map(debate => (
            <Link key={debate.id} href={`/debates/${debate.id}`} className="block">
              <div className="border border-gray-700 p-6 rounded-lg hover:border-yellow-400">
                <h2 className="text-2xl font-semibold">{debate.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
