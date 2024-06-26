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
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">New Build</h1>
      <ClassSelect onChange={(value) => setSelectedClass(value)} />
      <Button onClick={handleCreateBuild} className="px-4 py-2 mt-4 font-bold">
        Create Build
      </Button>
    </main>
  );
}
