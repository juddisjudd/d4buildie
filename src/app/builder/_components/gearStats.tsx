import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import gearStats from '../../../data/gearStats.json'; // Adjust the path as needed
import { weaponTypes } from './weaponTypes'; // Import the weapon types

type GearStatsCardProps = {
  title: string;
  slots: number;
  temperingSlots: number;
  hasImplicitStat?: boolean;
  hasWeaponType?: boolean;
  selectedClass: string;
};

type GearStatsData = {
  [key: string]: {
    all: string[];
    implicit?: string[];
    barbarian?: string[];
    druid?: string[];
    necromancer?: string[];
    rogue?: string[];
    sorcerer?: string[];
  };
};

type WeaponTypesData = {
  [key: string]: {
    type: string;
    classes: string[];
  }[];
};

const GearStatsCard: React.FC<GearStatsCardProps> = ({
  title,
  slots,
  temperingSlots,
  hasImplicitStat,
  hasWeaponType,
  selectedClass,
}) => {
  const allStats = (gearStats as GearStatsData)[title]?.all || [];
  const classSpecificStats = (gearStats as GearStatsData)[title]?.[selectedClass as keyof GearStatsData[string]] || [];
  const implicitStats = (gearStats as GearStatsData)[title]?.implicit || [];
  const combinedStats = [...allStats, ...classSpecificStats];

  const weaponTypeOptions =
    (weaponTypes as WeaponTypesData)[title]?.filter((wt) => wt.classes.includes(selectedClass)) || [];

  const [selectedStats, setSelectedStats] = useState<string[]>([]);

  const handleSelect = (stat: string, index: number) => {
    const newSelectedStats = [...selectedStats];
    newSelectedStats[index] = stat;
    setSelectedStats(newSelectedStats);
  };

  return (
    <Card className="rounded-md p-4 shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {hasWeaponType && weaponTypeOptions.length > 0 && (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Weapon Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {weaponTypeOptions.map((wt, index) => (
                  <SelectItem key={index} value={wt.type}>
                    {wt.type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        {hasImplicitStat && (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Implicit Stat" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {implicitStats.map((stat, index) => (
                  <SelectItem key={index} value={stat}>
                    {stat}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        {Array.from({ length: slots }, (_, i) => (
          <Select key={`${title}-slot-${i + 1}`}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Stat ${i + 1}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {combinedStats
                  .filter((stat) => !selectedStats.includes(stat))
                  .map((stat, index) => (
                    <SelectItem key={index} value={stat} onSelect={() => handleSelect(stat, i)}>
                      {stat}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
        {Array.from({ length: temperingSlots }, (_, i) => (
          <Select key={`${title}-tempering-${i + 1}`}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Tempering Stat ${i + 1}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {combinedStats
                  .filter((stat) => !selectedStats.includes(stat))
                  .map((stat, index) => (
                    <SelectItem key={index} value={stat} onSelect={() => handleSelect(stat, i + slots)}>
                      {stat}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </CardContent>
    </Card>
  );
};

const classSpecificCards: {
  [key: string]: Omit<GearStatsCardProps, 'selectedClass'>[];
} = {
  barbarian: [
    { title: 'Bludgeoning Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Slashing Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Dual-Wield Weapon 1', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Dual-Wield Weapon 2', slots: 3, temperingSlots: 2, hasWeaponType: true },
  ],
  rogue: [
    { title: 'Dual-Wield Weapon 1', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Dual-Wield Weapon 2', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Ranged Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
  ],
  default: [
    { title: 'Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Offhand', slots: 3, temperingSlots: 2, hasWeaponType: true },
  ],
};

type ClassType = keyof typeof classSpecificCards;

function isClassType(key: string | number): key is ClassType {
  return typeof key === 'string' && key in classSpecificCards;
}

export const GearStats = ({ selectedClass }: { selectedClass: string }) => {
  const commonCards: GearStatsCardProps[] = [
    { title: 'Helm', slots: 3, temperingSlots: 2, selectedClass },
    { title: 'Chest Armor', slots: 3, temperingSlots: 2, selectedClass },
    { title: 'Gloves', slots: 3, temperingSlots: 2, selectedClass },
    { title: 'Pants', slots: 3, temperingSlots: 2, selectedClass },
    { title: 'Boots', slots: 3, temperingSlots: 2, hasImplicitStat: true, selectedClass },
    { title: 'Amulet', slots: 3, temperingSlots: 2, selectedClass },
    { title: 'Ring 1', slots: 3, temperingSlots: 2, hasImplicitStat: true, selectedClass },
    { title: 'Ring 2', slots: 3, temperingSlots: 2, hasImplicitStat: true, selectedClass },
  ];

  const specificCards = isClassType(selectedClass)
    ? classSpecificCards[selectedClass].map((card) => ({ ...card, selectedClass }))
    : classSpecificCards.default.map((card) => ({ ...card, selectedClass }));

  const cards = [...commonCards, ...specificCards];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <GearStatsCard key={card.title} {...card} />
      ))}
    </div>
  );
};
