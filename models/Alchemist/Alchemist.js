/* eslint-disable no-undef */
import data from "./Alchemist.json";
import items from "../Items";

const isInStock = (item) => {
  const rand = Math.floor(Math.random() * 100);

  const rarity = {
    Common: 20,
    Uncommon: 50,
    Rare: 70,
    "Very Rare": 80,
    Legendary: 95,
  };

  return !item.rarity || rand > rarity[item.rarity];
};

const inventory = [
  ...(() => {
    console.log(items);
    const remainingItems = items.potions.items.filter((item) =>
      isInStock(item)
    );

    return [...remainingItems];
  })(),
];

const Alchemist = (() => {
  const getName = () => {
    return "The " + data.adjective.random() + " " + data.noun.random();
  };

  const getCleanliness = () => {
    return "The room is " + data.cleanlinessDescriptor.random();
  };

  const getEntrance = (name) => {
    return data.entranceDescription.random() + " " + name + ".";
  };

  const generate = () => {
    const name = getName();

    return {
      name,
      cleanliness: getCleanliness(),
      entrance: getEntrance(name),
      inventory,
    };
  };

  return {
    generate,
  };
})();

export default Alchemist;
