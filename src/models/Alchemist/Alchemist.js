import data from './Alchemist.json';

const Alchemist = (() => {

  const getName = () => {
    return 'The ' + data.adjective.random() + ' ' + data.noun.random();
  };

  const getCleanliness = () => {
    return 'The room is ' + data.cleanlinessDescriptor.random();
  };

  const getEntrance = (name) => {
    return data.entranceDescription.random() + ' ' + name + '.';
  };

  const generate = () => {
    const name = getName();

    return {
      name,
      cleanliness: getCleanliness(),
      entrance: getEntrance(name),
    };
  };

  return {
    generate
  };
})();

export default Alchemist;
