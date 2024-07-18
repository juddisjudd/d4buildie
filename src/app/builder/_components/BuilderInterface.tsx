'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import { GearCombobox } from './GearCombobox';
import { gearSlots, gemSlots } from './gearSlots';
import { GearStats } from './gearStats';

const gearSlotConfig = {
  leftSide: [
    { label: 'Helm', key: 'helm' },
    { label: 'Chest Armor', key: 'chestArmor' },
    { label: 'Gloves', key: 'gloves' },
    { label: 'Pants', key: 'pants' },
    { label: 'Boots', key: 'boots' },
    { label: 'Bludgeoning Weapon', key: 'bludgeoningWeapon', classes: ['barbarian'] },
    { label: 'Dual-Wield Weapon 1', key: 'dualWieldWeapon1', classes: ['barbarian'] },
    { label: 'Ranged Weapon', key: 'rangedWeapon', classes: ['rogue'] },
    { label: 'Weapon', key: 'weapon', classes: ['druid', 'necromancer', 'sorcerer', 'spiritborn'] },
    { label: 'Empty', key: 'empty', classes: ['druid', 'necromancer', 'sorcerer', 'spiritborn', 'rogue'] },
  ],
  rightSide: [
    { label: 'Empty', key: 'empty' },
    { label: 'Amulet', key: 'amulet' },
    { label: 'Ring 1', key: 'ring1' },
    { label: 'Ring 2', key: 'ring2' },
    { label: 'Empty', key: 'empty' },
    { label: 'Offhand', key: 'offhand', classes: ['druid', 'necromancer', 'sorcerer', 'spiritborn'] },
    { label: 'Slashing Weapon', key: 'slashingWeapon', classes: ['barbarian'] },
    { label: 'Dual-Wield Weapon 1', key: 'dualWieldWeapon1', classes: ['rogue'] },
    { label: 'Dual-Wield Weapon 2', key: 'dualWieldWeapon2', classes: ['rogue', 'barbarian'] },
    { label: 'Empty', key: 'empty', classes: ['druid', 'necromancer', 'sorcerer', 'spiritborn'] },
  ],
};

const BuilderInterface = ({ selectedClass }: { selectedClass: string }) => {
  const getSlots = (side: 'leftSide' | 'rightSide') => {
    return gearSlotConfig[side].filter(slot =>
      !slot.classes || slot.classes.includes(selectedClass)
    );
  };

  const leftSideSlots = getSlots('leftSide');
  const rightSideSlots = getSlots('rightSide');

  const renderSlot = (slot: { label: string, key: string }, index: number, isRightSide: boolean) => {
    const gearSlot = gearSlots[selectedClass]?.find(g => g.label === slot.label);
    return (
      <div key={index} className={`flex items-center gap-4 ${isRightSide ? 'justify-end' : ''}`}>
        {gearSlot ? (
          <GearCombobox selectedGear={gearSlot.label} imageSrc={gearSlot.imageSrc} isRightSide={isRightSide} />
        ) : (
          <div className="h-[70px] w-[70px] rounded bg-gray-200"></div>
        )}
      </div>
    );
  };

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
              <div className="grid grid-cols-1 gap-4">
                {leftSideSlots.map((slot, index) => renderSlot(slot, index, false))}
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
              <div className="grid grid-cols-1 gap-4">
                {rightSideSlots.map((slot, index) => renderSlot(slot, index, true))}
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
          <TabsContent value="skill-tree">{/* Skill tree content here */}</TabsContent>
          <TabsContent value="paragon">{/* Paragon content here */}</TabsContent>
          <TabsContent value="notes">{/* Notes content here */}</TabsContent>
          <TabsContent value="showcase">{/* Showcase content here (youtube link or something) */}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BuilderInterface;
