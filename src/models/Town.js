const Town = (() => {

  const prefix = [
    'Green',
    'Elms',
    'Oak',
    'Fair',
    'Farren',
    'Tall',
    'Nar',
    'Alla',
    'Lans',
    'San',
    'Col',
    'Fri',
    'Plain',
    'Hon',
    'Far',
    'Barrow',
    'Shi',
    'Mel',
    'Mal',
    'Bon',
    'Bie',
    'Can',
    'Pol',
    'Pan',
    'Fald',
    'Frior',
    'Pol',
    'Stone',
    'Water',
    'Leaf',
    'Ice',
    'Flame',
    'Sol',
    'Storm',
    'Earth',
    'Gleam',
    'Star',
    'Art',
    'War',
    'Heart',
    'Hard',
    'Fall',
    'Rock',
    'Doom',
    'Oak',
    'Tear',
    'Raven',
    'Badger',
    'Snake',
    'Lion',
    'Hell',
    'Rage',
    'Brine',
    'Rat',
    'Buck',
    'Lily',
    'Core',
    'Stench',
    'Mage',
    'God',
    'Soil',
    'Pure',
    'Mal',
    'Cam',
    'Fen',
    'Clear',
    'Split',
    'Founders',
    'Heir',
    'Fair',
    'Spin'
    ];

  const suffix = [
    'dale',
    'ten',
    'den',
    'ven',
    'gen',
    'len',
    'lun',
    'stun',
    'ville',
    'burn',
    'view',
    'nen',
    'lan',
    'sed',
    'folk',
    'ork',
    'len',
    'pan',
    'rel',
    'old',
    'ten',
    'tan',
    'lend',
    'vorn',
    'vant',
    'lid',
    'lin',
    'crest',
    'bridge',
    'run',
    'catch',
    'blade',
    'haven',
    'rise',
    'more',
    'light',
    'main',
    'blaze',
    'place',
    'tear',
    'fold',
    'rest',
    'host',
    'craft',
    'lair',
    'hollow',
    'vale',
    'hammer',
    'pike',
    'rail',
    'spike',
    'ring',
    'henge',
    'coil',
    'spring',
    'jaw',
    'mark',
    'hail',
    'loch',
    'child',
    'keep',
    'fort',
    'brook',
    'forth',
    'melt',
    'borourgh',
    'ford',
    'crawl',
    'moral',
    'combe',
    'glen',
    'garden',
    'wish',
    'fellow',
    'ridge',
    'ward'
  ];

  const rand = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[ index ];
  };

  const name = (() => {
    return rand(prefix) + rand(suffix);
  })();

  const population = (() => {
    return Math.floor(Math.random() * 250) * 10;
  })();

  const populationCategory = (() => {
    const pop = population;

    switch (true) {
      case pop <= 100:                    return 1;
      case pop > 100 && pop <= 500:       return 2;
      case pop > 500 && pop <= 800:       return 3;
      case pop > 800 && pop <= 1200:      return 4;
      case pop > 1200 && pop <= 1600:     return 5;
      case pop > 1600 && pop <= 1900:     return 6;
      case pop > 1900 && pop <= 2200:     return 7;
      case pop > 2200 && pop <= 2500:     return 8;
    }
  })();

  const sizeDescriptor = () => {
    switch (populationCategory) {
      case 1:   return 'triflingly small outpost';
      case 2:   return 'tiny camp';
      case 3:   return 'homely village';
      case 4:   return 'medium-sized settlement';
      case 5:   return 'sizable village';
      case 6:   return 'substantial settlement';
      case 7:   return 'extensive, vast city';
      case 8:   return 'massive, sprawling city';
    }
  };

  const approach = () => {
    const actions = [
      'Long wearied, and ready for an extensive rest, you approach',
      'After a weary voyage, you finally arrive at',
      'As you make your way out of the treeline of the forest, you see',
      'As the sun descends downward, it falls on',
      'Your back is tired and your legs are jelly. Worn and ready for a rest, you finally arrive at',
      'Drenched in sweat from your journey, you finally arrive at',
      'You approach a steep valley, and as you look inside for the first time, you see',
    ];

    const num = Math.floor(Math.random() * actions.length);
    return actions[num];
  };

  const description = (() => {
    return approach() + ' the ' + sizeDescriptor() + ' of ' + name +', with its population of ' + population + '.';
  })();

  const generate = () => {
    return {
      name,
      population,
      populationCategory,
      description,
    };
  };

  return {
    generate
  };
})();

export default Town;
