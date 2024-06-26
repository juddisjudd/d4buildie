"use client";

import React from "react";
import { Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function Home() {
  const handleImportLoadClick = () => {
    console.log("Button clicked");
    toast("Feature not implemented yet.");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center space-x-4">
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Build
        </Button>
        <Separator orientation="vertical" className="h-8" />
        <Button onClick={handleImportLoadClick}>
          <Upload className="mr-2 h-4 w-4" />
          Import/Load Build
        </Button>
      </div>
    </main>
  );
}
