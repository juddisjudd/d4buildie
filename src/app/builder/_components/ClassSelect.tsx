'use client';

import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';

const classes = [
  { value: 'barbarian', label: 'Barbarian', icon: '/images/icons/classes/barbarian.webp' },
  { value: 'druid', label: 'Druid', icon: '/images/icons/classes/druid.webp' },
  { value: 'necromancer', label: 'Necromancer', icon: '/images/icons/classes/necromancer.webp' },
  { value: 'rogue', label: 'Rogue', icon: '/images/icons/classes/rogue.webp' },
  { value: 'sorcerer', label: 'Sorcerer', icon: '/images/icons/classes/sorcerer.webp' },
  { value: 'spiritborn', label: 'Spiritborn', icon: '/images/icons/classes/spiritborn.webp' },
];

interface ClassSelectProps {
  onChange: (value: string) => void;
}

export const ClassSelect: React.FC<ClassSelectProps> = ({ onChange }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a class" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {classes.map((cls) => (
            <SelectItem key={cls.value} value={cls.value}>
              <div className="flex items-center gap-2">
                <img src={cls.icon} alt={cls.label} width={40} height={40} className="rounded-md" />
                <span>{cls.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
