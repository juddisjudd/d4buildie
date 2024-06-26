import React from 'react';
import { Plus, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center space-x-4">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Build
        </Button>
        <Separator orientation="vertical" className="h-8" />
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Import/Load
        </Button>
      </div>
    </main>
  );
}
