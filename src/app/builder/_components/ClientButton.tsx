'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const ClientButton: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/builder');
  };

  return <Button onClick={handleBackClick}>Back to Class Selection</Button>;
};

export default ClientButton;
