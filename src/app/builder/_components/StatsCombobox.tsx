'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface StatsComboboxProps {
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
  selectedValue: string;
}

export const StatsCombobox: React.FC<StatsComboboxProps> = ({ options, placeholder, onSelect, selectedValue }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="relative h-[40px] w-full justify-between rounded"
          >
            {selectedValue || placeholder}
            <ChevronsUpDown className="absolute right-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
            <CommandList>
              <CommandEmpty>No {placeholder.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem key={option} onSelect={() => onSelect(option)}>
                    <Check className={cn('mr-2 h-4 w-4', selectedValue === option ? 'opacity-100' : 'opacity-0')} />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
