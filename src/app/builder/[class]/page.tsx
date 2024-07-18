import React from 'react';
import BuilderInterface from '../_components/BuilderInterface';

const classes = ['barbarian', 'druid', 'necromancer', 'rogue', 'sorcerer', 'spiritborn'];

export async function generateStaticParams() {
  return classes.map((cls) => ({ class: cls }));
}

const ClassBuilderPage = ({ params }: { params: { class: string } }) => {
  const className = params.class;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">
        <span className="uppercase">{className} Builder</span>
      </h1>
      <BuilderInterface selectedClass={className} />
    </main>
  );
};

export default ClassBuilderPage;