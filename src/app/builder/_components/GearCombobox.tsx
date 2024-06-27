'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { gemStats } from './GemStats';

const gearItems = [
  { value: 'item1', label: 'Item 1', imageSrc: '/path/to/item1/image.webp' },
  { value: 'item2', label: 'Item 2', imageSrc: '/path/to/item2/image.webp' },
  { value: 'item3', label: 'Item 3', imageSrc: '/path/to/item3/image.webp' },
];

const gemOptions = Object.values(gemStats);

interface GearComboboxProps {
  selectedGear: string;
  imageSrc: string;
  isGemSlot?: boolean;
}

const isJewelrySlot = (slot: string) => {
  return slot === 'Amulet' || slot === 'Ring 1' || slot === 'Ring 2';
};

export const GearCombobox: React.FC<GearComboboxProps> = ({ selectedGear, imageSrc, isGemSlot = false }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState(imageSrc);

  const options = isGemSlot ? gemOptions : gearItems;

  const handleSelect = (currentValue: string) => {
    const selectedItem = options.find((item) => item.value === currentValue);
    setValue(currentValue === value ? '' : currentValue);
    setSelectedImage(selectedItem ? selectedItem.imageSrc : imageSrc);
    setOpen(false);
  };

  const selectedItem = options.find((item) => item.value === value);

  return (
    <div className="flex items-center space-x-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="relative h-[70px] w-[70px] justify-center rounded"
          >
            {selectedItem ? (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img src={selectedImage} alt={selectedGear} className="h-full w-full rounded object-cover" />
                </HoverCardTrigger>
                <HoverCardContent className="w-[300px] p-4">
                  <div className="flex items-center space-x-2">
                    <img src={selectedItem.imageSrc} alt={selectedItem.label} className="h-8 w-8" />
                    <div>
                      <p className="font-bold">{selectedItem.label}</p>
                      <p className="text-sm text-muted-foreground">Gem</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p
                      className={cn('text-sm', selectedGear === 'Weapon' ? 'text-foreground' : 'text-muted-foreground')}
                    >
                      Weapon: {gemStats[selectedItem.value]?.stats.weapon}
                    </p>
                    <p
                      className={cn('text-sm', selectedGear === 'Armor' ? 'text-foreground' : 'text-muted-foreground')}
                    >
                      Armor: {gemStats[selectedItem.value]?.stats.armor}
                    </p>
                    <p
                      className={cn(
                        'text-sm',
                        isJewelrySlot(selectedGear) ? 'text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      Jewelry: {gemStats[selectedItem.value]?.stats.jewelry}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <img src={selectedImage} alt={selectedGear} className="h-full w-full rounded object-cover" />
            )}
            <ChevronsUpDown className="absolute bottom-1 right-1 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 md:w-[200px]">
          <Command>
            <CommandInput placeholder="Search gear..." />
            <CommandList>
              <CommandEmpty>No gear found.</CommandEmpty>
              <CommandGroup>
                {options.map((item) => (
                  <HoverCard key={item.value}>
                    <HoverCardTrigger asChild>
                      <CommandItem value={item.value} onSelect={() => handleSelect(item.value)}>
                        <Check className={cn('mr-2 h-4 w-4', value === item.value ? 'opacity-100' : 'opacity-0')} />
                        <img src={item.imageSrc} alt={item.label} className="mr-2 h-4 w-4" />
                        {item.label}
                      </CommandItem>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[300px] p-4">
                      <div className="flex items-center space-x-2">
                        <img src={item.imageSrc} alt={item.label} className="h-8 w-8" />
                        <div>
                          <p className="font-bold">{item.label}</p>
                          <p className="text-sm text-muted-foreground">Gem</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p
                          className={cn(
                            'text-sm',
                            selectedGear === 'Weapon' ? 'text-foreground' : 'text-muted-foreground'
                          )}
                        >
                          Weapon: {gemStats[item.value]?.stats.weapon}
                        </p>
                        <p
                          className={cn(
                            'text-sm',
                            selectedGear === 'Armor' ? 'text-foreground' : 'text-muted-foreground'
                          )}
                        >
                          Armor: {gemStats[item.value]?.stats.armor}
                        </p>
                        <p
                          className={cn(
                            'text-sm',
                            isJewelrySlot(selectedGear) ? 'text-foreground' : 'text-muted-foreground'
                          )}
                        >
                          Jewelry: {gemStats[item.value]?.stats.jewelry}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex flex-col items-start">
        <span>{selectedGear}</span>
        <span className="text-sm text-muted-foreground">{value || 'Empty'}</span>
      </div>
    </div>
  );
};
