import armorData from "./armor/armor.json";
import weaponsData from "./weapons/weapons.json";
import potionsData from "./potions/potions.json";
import combatData from "./magic-items/combat.json";
import noncombatData from "./magic-items/non-combat.json";
import consumablesData from "./magic-items/consumables.json";

const { items: armor } = armorData;
const { items: weapons } = weaponsData;
const { items: potions } = potionsData;
const { items: combat } = combatData;
const { items: noncombat } = noncombatData;
const { items: consumables } = consumablesData;

const matches = function (key, value) {
  return this.items.filter((item) => item[key] && item[key] === value);
};

const getRandom = function (count) {
  return this.items.sort(() => 0.5 - Math.random()).slice(0, count);
};

const items = {
  all: {
    items: [...armor, ...weapons, ...combat, ...noncombat, ...consumables],
    matches,
    getRandom,
  },
  armor: {
    items: [...armor, ...combat],
    matches,
    getRandom,
  },
  weapons: {
    items: [...weapons, ...noncombat],
    matches,
    getRandom,
  },
  potions: {
    items: [...potions, ...consumables],
    matches,
    getRandom,
  },
};

export default items;
