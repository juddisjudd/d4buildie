'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Message } from './_components/Message';

export default function Builder() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">New Build</h1>
      <Message />
      <Link href="/">
        <Button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
          Back to Home
        </Button>
      </Link>
    </main>
  );
}
