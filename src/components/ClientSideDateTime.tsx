// src/components/ClientSideDateTime.tsx

'use client';

import { useState, useEffect } from 'react';

interface ClientSideDateTimeProps {
  dateString: string;
}

export default function ClientSideDateTime({ dateString }: ClientSideDateTimeProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render a placeholder or nothing on the server
    return <span>Loading date...</span>;
  }

  // Render the formatted date only on the client
  return <>{new Date(dateString).toLocaleString()}</>;
}