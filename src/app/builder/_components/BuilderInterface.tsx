'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import { GearCombobox } from './GearCombobox';

type GearSlotsType = {
  [key: string]: { label: string, imageSrc: string }[];
};

const gearSlots: GearSlotsType = {
  barbarian: [
    { label: 'Helm', imageSrc: '/images/icons/gear/helm.webp' },
    { label: 'Chest Armor', imageSrc: '/images/icons/gear/chest_armor.webp' },
    { label: 'Gloves', imageSrc: '/images/icons/gear/gloves.webp' },
    { label: 'Pants', imageSrc: '/images/icons/gear/pants.webp' },
    { label: 'Boots', imageSrc: '/images/icons/gear/boots.webp' },
    { label: 'Bludgeoning Weapon', imageSrc: '/images/icons/gear/bludgeoning_weapon.webp' },
    { label: 'Dual-Wield Weapon 1', imageSrc: '/images/icons/gear/dual_wield_weapon_1.webp' },
    { label: 'Dual-Wield Weapon 2', imageSrc: '/images/icons/gear/dual_wield_weapon_2.webp' },
    { label: 'Amulet', imageSrc: '/images/icons/gear/amulet.webp' },
    { label: 'Ring 1', imageSrc: '/images/icons/gear/ring_1.webp' },
    { label: 'Ring 2', imageSrc: '/images/icons/gear/ring_2.webp' },
    { label: 'Slashing Weapon', imageSrc: '/images/icons/gear/slashing_weapon.webp' },
  ],
  // Add other class configurations here
};

const gemSlots = [
  { label: 'Weapon', imageSrc: '/images/icons/gear/gems.webp' },
  { label: 'Armor', imageSrc: '/images/icons/gear/gems.webp' },
  { label: 'Amulet', imageSrc: '/images/icons/gear/gems.webp' },
  { label: 'Ring 1', imageSrc: '/images/icons/gear/gems.webp' },
  { label: 'Ring 2', imageSrc: '/images/icons/gear/gems.webp' }
];

const BuilderInterface = ({ selectedClass }: { selectedClass: string }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start px-4 py-2">
      <div className="w-full bg-background">
        <Tabs defaultValue="gear-skills" className="w-full">
          <TabsList className="w-full flex justify-center">
            <TabsTrigger value="gear-skills">Gear & Skills</TabsTrigger>
            <TabsTrigger value="skill-tree">Skill Tree</TabsTrigger>
            <TabsTrigger value="paragon">Paragon</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="showcase">Showcase</TabsTrigger>
          </TabsList>
          <TabsContent value="gear-skills">
            <div className="flex justify-between w-full max-w-7xl mx-auto mt-4">
              <div className="flex flex-col space-y-2">
                {gearSlots[selectedClass]?.slice(0, 7).map(({ label, imageSrc }) => (
                  <GearCombobox key={label} selectedGear={label} imageSrc={imageSrc} />
                ))}
              </div>
              <div className="flex items-start justify-center mt-2">
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
                {gearSlots[selectedClass]?.slice(7).map(({ label, imageSrc }) => (
                  <GearCombobox key={label} selectedGear={label} imageSrc={imageSrc} />
                ))}
              </div>
            </div>
            <div className="mt-8 w-full max-w-7xl mx-auto">
              <h2 className="text-lg font-bold mb-2 text-center">Gems</h2>
              <div className="flex justify-center space-x-4">
                {gemSlots.map(({ label, imageSrc }) => (
                  <GearCombobox key={label} selectedGear={label} imageSrc={imageSrc} isGemSlot />
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
    </div>
  );
};

export default BuilderInterface;
