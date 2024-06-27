export type GearSlotType = {
    label: string;
    value: string;
    imageSrc: string;
    isGemSlot?: boolean;
  };
  
  export const gemSlots: GearSlotType[] = [
    { label: 'Weapon', value: 'gem_weapon', imageSrc: '/images/icons/gems/gems.webp', isGemSlot: true },
    { label: 'Armor', value: 'gem_armor', imageSrc: '/images/icons/gems/gems.webp', isGemSlot: true },
    { label: 'Amulet', value: 'gem_amulet', imageSrc: '/images/icons/gems/gems.webp', isGemSlot: true },
    { label: 'Ring 1', value: 'gem_ring_1', imageSrc: '/images/icons/gems/gems.webp', isGemSlot: true },
    { label: 'Ring 2', value: 'gem_ring_2', imageSrc: '/images/icons/gems/gems.webp', isGemSlot: true },
  ];

  export const barbarianGearSlots: GearSlotType[] = [
    { label: 'Helm', value: 'helm', imageSrc: '/images/icons/gear/helm.webp' },
    { label: 'Chest Armor', value: 'chest_armor', imageSrc: '/images/icons/gear/chest_armor.webp' },
    { label: 'Gloves', value: 'gloves', imageSrc: '/images/icons/gear/gloves.webp' },
    { label: 'Pants', value: 'pants', imageSrc: '/images/icons/gear/pants.webp' },
    { label: 'Boots', value: 'boots', imageSrc: '/images/icons/gear/boots.webp' },
    { label: 'Bludgeoning Weapon', value: 'bludgeoning_weapon', imageSrc: '/images/icons/gear/bludgeoning_weapon.webp' },
    { label: 'Dual-Wield Weapon 1', value: 'dual_wield_weapon_1', imageSrc: '/images/icons/gear/dual_wield_weapon_1.webp' },
    { label: 'Dual-Wield Weapon 2', value: 'dual_wield_weapon_2', imageSrc: '/images/icons/gear/dual_wield_weapon_2.webp' },
    { label: 'Amulet', value: 'amulet', imageSrc: '/images/icons/gear/amulet.webp' },
    { label: 'Ring 1', value: 'ring_1', imageSrc: '/images/icons/gear/ring_1.webp' },
    { label: 'Ring 2', value: 'ring_2', imageSrc: '/images/icons/gear/ring_2.webp' },
    { label: 'Slashing Weapon', value: 'slashing_weapon', imageSrc: '/images/icons/gear/slashing_weapon.webp' },
  ];
  
  export const druidGearSlots: GearSlotType[] = [
    // Add druid specific gear slots here
  ];
  
  // Add other classes similarly...
  