import { items as armor } from "./armor/armor.json";
import { items as weapons } from "./weapons/weapons.json";
import { items as potions } from "./potion/potions.json";
import { items as combat } from "./magic-items/combat.json";
import { items as noncombat } from "./magic-items/non-combat.json";
import { items as consumables } from "./magic-items/consumables.json";

const matches = function(key, value) {
  return this.items.filter(item => item[key] && item[key] === value);
};

const getRandom = function(count) {
  return this.items.sort(() => 0.5 - Math.random()).slice(0, count);
};

const items = {
  all: {
    items: [...armor, ...weapons, ...combat, ...noncombat, ...consumables],
    matches,
    getRandom
  },
  armor: {
    items: [...armor, ...combat],
    matches,
    getRandom
  },
  weapons: {
    items: [...weapons, ...noncombat],
    matches,
    getRandom
  },
  potions: {
    items: [...potions, ...consumables],
    matches,
    getRandom
  }
};

export default items;
