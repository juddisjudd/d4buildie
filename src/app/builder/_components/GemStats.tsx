type GemStat = {
    value: string;
    label: string;
    imageSrc: string;
    stats: {
      weapon: string;
      armor: string;
      jewelry: string;
    };
  };
  
  type GemStats = {
    [key: string]: GemStat;
  };
  
  export const gemStats: GemStats = {
    amethyst: {
      value: 'amethyst',
      label: 'Amethyst',
      imageSrc: '/images/icons/gems/amethyst.webp',
      stats: {
        weapon: '+18% Damage Over Time',
        armor: '100 Strength',
        jewelry: '45% Shadow Resistance',
      },
    },
    emerald: {
      value: 'emerald',
      label: 'Emerald',
      imageSrc: '/images/icons/gems/emerald.webp',
      stats: {
        weapon: '+25% Critical Strike Damage',
        armor: '100 Dexterity',
        jewelry: '45% Poison Resistance',
      },
    },
    ruby: {
      value: 'ruby',
      label: 'Ruby',
      imageSrc: '/images/icons/gems/ruby.webp',
      stats: {
        weapon: '+54% Overpower Damage',
        armor: '9% Maximum Life',
        jewelry: '45% Fire Resistance',
      },
    },
    topaz: {
      value: 'topaz',
      label: 'Topaz',
      imageSrc: '/images/icons/gems/topaz.webp',
      stats: {
        weapon: '+45% Basic Skill Damage',
        armor: '100 Intelligence',
        jewelry: '45% Lightning Resistance',
      },
    },
    sapphire: {
      value: 'sapphire',
      label: 'Sapphire',
      imageSrc: '/images/icons/gems/sapphire.webp',
      stats: {
        weapon: '+20% Vulnerable Damage',
        armor: '100 Willpower',
        jewelry: '45% Cold Resistance',
      },
    },
    diamond: {
      value: 'diamond',
      label: 'Diamond',
      imageSrc: '/images/icons/gems/diamond.webp',
      stats: {
        weapon: '+35% Ultimate Damage',
        armor: '11% Barrier Generation',
        jewelry: '8% Resistance to All Elements',
      },
    },
    skull: {
      value: 'skull',
      label: 'Skull',
      imageSrc: '/images/icons/gems/skull.webp',
      stats: {
        weapon: '+48 Life on Kill',
        armor: '15% Healing Received',
        jewelry: '+525 Armor',
      },
    },
  };
  