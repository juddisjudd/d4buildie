import React from 'react';
import { Button } from '@/components/ui/button';
import ClientButton from '@/app/builder/_components/ClientButton';

const classes = [
  'barbarian',
  'druid',
  'necromancer',
  'rogue',
  'sorcerer',
  'spiritborn',
];

export async function generateStaticParams() {
  return classes.map((cls) => ({ class: cls }));
}

const ClassBuilderPage = ({ params }: { params: { class: string } }) => {
  const className = params.class;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">{className} Builder</h1>
      <p className="mb-4">This is the builder page for the {className} class.</p>
      <ClientButton />
    </main>
  );
};

export default ClassBuilderPage;
