import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';

type GearStatsCardProps = {
  title: string;
  slots: number;
  temperingSlots: number;
  hasImplicitStat?: boolean;
  hasWeaponType?: boolean;
};

const GearStatsCard: React.FC<GearStatsCardProps> = ({
  title,
  slots,
  temperingSlots,
  hasImplicitStat,
  hasWeaponType,
}) => (
  <Card className="rounded-md p-4 shadow-md">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {hasWeaponType && (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Weapon Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="sword">Sword</SelectItem>
              <SelectItem value="axe">Axe</SelectItem>
              <SelectItem value="mace">Mace</SelectItem>
              <SelectItem value="bow">Bow</SelectItem>
              <SelectItem value="crossbow">Crossbow</SelectItem>
              {/* Add more weapon types as needed */}
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
              <SelectItem value="implicit-1">Implicit Option 1</SelectItem>
              <SelectItem value="implicit-2">Implicit Option 2</SelectItem>
              {/* Add more implicit options as needed */}
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
              <SelectItem value={`option-${i + 1}`}>Option {i + 1}</SelectItem>
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
              <SelectItem value={`option-${i + 1}`}>Option {i + 1}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </CardContent>
  </Card>
);

const classSpecificCards: {
  [key: string]: GearStatsCardProps[];
} = {
  barbarian: [
    { title: 'Bludgeoning Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Slashing Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Dual-Wield Weapon 1', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Dual-Wield Weapon 2', slots: 3, temperingSlots: 2, hasWeaponType: true },
  ],
  rogue: [
    { title: 'Ranged Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Dual-Wield Weapon 1', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Dual-Wield Weapon 2', slots: 3, temperingSlots: 2, hasWeaponType: true },
  ],
  default: [
    { title: 'Weapon', slots: 3, temperingSlots: 2, hasWeaponType: true },
    { title: 'Offhand', slots: 3, temperingSlots: 2, hasWeaponType: true },
  ],
};

type ClassType = keyof typeof classSpecificCards;

function isClassType(key: string): key is ClassType {
  return typeof key === 'string' && key in classSpecificCards;
}

export const GearStats = ({ selectedClass }: { selectedClass: string }) => {
  const commonCards: GearStatsCardProps[] = [
    { title: 'Helm', slots: 3, temperingSlots: 2 },
    { title: 'Chest Armor', slots: 3, temperingSlots: 2 },
    { title: 'Gloves', slots: 3, temperingSlots: 2 },
    { title: 'Pants', slots: 3, temperingSlots: 2 },
    { title: 'Boots', slots: 3, temperingSlots: 2, hasImplicitStat: true },
    { title: 'Amulet', slots: 3, temperingSlots: 2 },
    { title: 'Ring 1', slots: 3, temperingSlots: 2, hasImplicitStat: true },
    { title: 'Ring 2', slots: 3, temperingSlots: 2, hasImplicitStat: true },
  ];

  const specificCards = isClassType(selectedClass) ? classSpecificCards[selectedClass] : classSpecificCards.default;

  const cards = [...commonCards, ...specificCards];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <GearStatsCard
          key={card.title}
          title={card.title}
          slots={card.slots}
          temperingSlots={card.temperingSlots}
          hasImplicitStat={card.hasImplicitStat}
          hasWeaponType={card.hasWeaponType}
        />
      ))}
    </div>
  );
};
