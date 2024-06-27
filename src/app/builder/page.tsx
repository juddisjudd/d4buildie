'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ClassSelect } from './_components/ClassSelect';

export default function Builder() {
  const [selectedClass, setSelectedClass] = useState('');
  const router = useRouter();

  const handleCreateBuild = () => {
    if (selectedClass) {
      router.push(`/builder/${selectedClass}`);
    } else {
      alert('Please select a class.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">New Build</h1>
      <ClassSelect onChange={(value) => setSelectedClass(value)} />
      <Button onClick={handleCreateBuild} className="mt-4 px-4 py-2 font-bold">
        Create Build
      </Button>
    </main>
  );
}
