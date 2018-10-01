import data from './NPC.json';

const NPC = (() => {

  const getName = () => {
    return data.firstname.random() + ' ' + data.lastname.random();
  };

  const getGender = () => {
    return data.gender.random();
  };

  const generate = () => {
    const name = getName();
    const firstname = name.split(' ')[0];
    const lastname = name.split(' ')[1];

    const gender = getGender();

    const pronouns = {
      'male': {
        heshe: 'he',
        hishers: 'his',
        himher: 'him',
        manwoman: 'man',
        mrmrs: 'Mr.',
      },
      'female': {
        heshe: 'she',
        hishers: 'hers',
        himher: 'her',
        manwoman: 'woman',
        mrmrs: 'Mrs.',
      },
    }[gender];

    return {
      name,
      firstname,
      lastname,
      ...pronouns,
    };
  };

  return {
    generate
  };
})();

export default NPC;
