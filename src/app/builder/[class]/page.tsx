import React from 'react';
import BuilderInterface from '../_components/BuilderInterface';

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
      <BuilderInterface selectedClass={className} />
    </main>
  );
};

export default ClassBuilderPage;
