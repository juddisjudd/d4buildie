'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import { GearCombobox } from './GearCombobox';

type GearSlotsType = {
  [key: string]: string[];
};

const gearSlots: GearSlotsType = {
  barbarian: [
    'Helm',
    'Chest Armor',
    'Gloves',
    'Pants',
    'Boots',
    'Bludgeoning Weapon',
    'Dual-Wield Weapon 1',
    'Amulet',
    'Ring 1',
    'Ring 2',
    'Slashing Weapon',
    'Dual-Wield Weapon 2'
  ],
  // Add other class configurations here
};

const gemSlots = [
  'Weapon',
  'Armor',
  'Amulet',
  'Ring 1',
  'Ring 2'
];

const BuilderInterface = ({ selectedClass }: { selectedClass: string }) => {
  return (
    <div className="p-4">
      <Tabs defaultValue="gear-skills">
        <TabsList>
          <TabsTrigger value="gear-skills">Gear & Skills</TabsTrigger>
          <TabsTrigger value="skill-tree">Skill Tree</TabsTrigger>
          <TabsTrigger value="paragon">Paragon</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="showcase">Showcase</TabsTrigger>
        </TabsList>
        <TabsContent value="gear-skills">
          <div className="flex justify-center mb-4">
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
          <div className="flex">
            <div className="flex flex-col space-y-2 mr-4">
              {gearSlots[selectedClass]?.slice(0, 7).map((slot: string) => (
                <GearCombobox key={slot} selectedGear={slot} />
              ))}
            </div>
            <div className="flex flex-col space-y-2 ml-4">
              {gearSlots[selectedClass]?.slice(7).map((slot: string) => (
                <GearCombobox key={slot} selectedGear={slot} />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Gems</h2>
            <div className="flex space-x-4">
              {gemSlots.map((slot: string) => (
                <GearCombobox key={slot} selectedGear={slot} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="skill-tree">
          {/* Skill tree content here, specific to the selected class */}
        </TabsContent>
        <TabsContent value="paragon">
          {/* Paragon content here, specific to the selected class */}
        </TabsContent>
        <TabsContent value="notes">
          {/* Notes content here */}
        </TabsContent>
        <TabsContent value="showcase">
          {/* Showcase content here */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BuilderInterface;
