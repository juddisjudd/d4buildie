'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import { GearCombobox } from './GearCombobox';
import { gearSlots, gemSlots } from './gearSlots';
import { GearStats } from './gearStats';

const BuilderInterface = ({ selectedClass }: { selectedClass: string }) => {
  return (
    <div className="flex w-full flex-col items-center justify-start px-4 py-2">
      <div className="w-full bg-background">
        <Tabs defaultValue="gear-skills" className="w-full">
          <TabsList className="flex w-full justify-center">
            <TabsTrigger value="gear-skills">Gear & Skills</TabsTrigger>
            <TabsTrigger value="skill-tree">Skill Tree</TabsTrigger>
            <TabsTrigger value="paragon">Paragon</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="showcase">Showcase</TabsTrigger>
          </TabsList>
          <TabsContent value="gear-skills">
            <div className="mx-auto mt-4 flex w-full max-w-7xl justify-between">
              <div className="flex flex-col space-y-2">
                {gearSlots[selectedClass]
                  ?.slice(0, 7)
                  .map(({ label, imageSrc }) => <GearCombobox key={label} selectedGear={label} imageSrc={imageSrc} />)}
              </div>
              <div className="mt-2 flex items-start justify-center">
                <Select>
                  <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="Endgame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="endgame">Endgame</SelectItem>
                      <SelectItem value="midgame">Midgame</SelectItem>
                      <SelectItem value="earlygame">Early Game</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-2">
                {gearSlots[selectedClass]
                  ?.slice(7)
                  .map(({ label, imageSrc }) => <GearCombobox key={label} selectedGear={label} imageSrc={imageSrc} />)}
              </div>
            </div>
            <div className="mx-auto mt-8 w-full max-w-7xl">
              <h2 className="mb-2 text-center text-lg font-bold">Gems</h2>
              <div className="flex justify-center space-x-4">
                {gemSlots.map(({ label, imageSrc }) => (
                  <GearCombobox key={label} selectedGear={label} imageSrc={imageSrc} isGemSlot />
                ))}
              </div>
            </div>
            <div className="mx-auto mt-8 w-full max-w-7xl">
              <h2 className="mb-2 text-center text-lg font-bold">Gear Stats</h2>
              <GearStats selectedClass={selectedClass} />
            </div>
          </TabsContent>
          <TabsContent value="skill-tree">{/* Skill tree content here, specific to the selected class */}</TabsContent>
          <TabsContent value="paragon">{/* Paragon content here, specific to the selected class */}</TabsContent>
          <TabsContent value="notes">{/* Notes content here */}</TabsContent>
          <TabsContent value="showcase">{/* Showcase content here */}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BuilderInterface;
