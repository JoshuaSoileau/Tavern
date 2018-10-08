import data from './Tavern.json';

const Tavern = (() => {

  const name = () => {
    return 'The ' + data.adjective.random() + ' ' + data.noun.random();
  };

  const cleanliness = () => {
    return 'The room is ' + data.cleanlinessDescriptor.random();
  };

  const entrance = () => {
    return data.entranceDescription.random() + ' ' + name + '.';
  };

  const generate = () => {
    return {
      name: name(),
      cleanliness: cleanliness(),
      entrance: entrance(),
    };
  };

  return {
    generate
  };
})();

export default Tavern;
