import data from './Town.json';
import Road from '../Road/Road';

const Town = (() => {

  const name = (() => {
    return data.prefix.random() + data.suffix.random();
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

  const description = (() => {
    return data.approach.random() + ' the ' + sizeDescriptor() + ' of ' + name +', with its population of ' + population + '.';
  })();

  const generate = () => {
    return {
      name,
      population,
      populationCategory,
      description,
      primaryRoad: Road.generate(),
      secondaryRoad: Road.generate(),
      tertiaryRoad: Road.generate()
    };
  };

  return {
    generate
  };
})();

export default Town;
