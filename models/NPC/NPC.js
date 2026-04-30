import data from "./NPC.json";
import Items from "../Items";

const NPC = (() => {
  const getName = () => {
    return data.firstname.random() + " " + data.lastname.random();
  };

  const getGender = () => {
    return data.gender.random();
  };

  const getInventory = ({ inventory = "general", inventorySize = 4 } = {}) => {
    const source =
      {
        alchemist: Items.potions,
        tavern: Items.weapons,
      }[inventory] || Items.all;

    return source.getRandom(inventorySize);
  };

  const generate = (options = {}) => {
    const name = getName();
    const firstname = name.split(" ")[0];
    const lastname = name.split(" ")[1];

    const gender = getGender();

    const pronouns = {
      male: {
        heshe: "he",
        hishers: "his",
        himher: "him",
        manwoman: "man",
        mrmrs: "Mr.",
        malefemale: "male",
      },
      female: {
        heshe: "she",
        hishers: "hers",
        himher: "her",
        manwoman: "woman",
        mrmrs: "Mrs.",
        malefemale: "female",
      },
    }[gender];

    return {
      name,
      firstname,
      lastname,
      race: data.race.random(),
      class: data.class.random(),
      hairColor: data.hairColor.random(),
      hairType: data.hairType.random(),
      inventory: getInventory(options),
      ...pronouns,
    };
  };

  return {
    generate,
  };
})();

export default NPC;
