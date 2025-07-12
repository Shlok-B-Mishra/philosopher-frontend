// src/app/layout.tsx - FINAL, BEST VERSION

import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Philosopher Debates',
  description: 'Live philosophical debates between the greatest minds.',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  );
}