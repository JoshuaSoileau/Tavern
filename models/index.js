/* eslint-disable no-undef */
import "../src/utils/_array-random";
import NPC from "./NPC/NPC";
import Town from "./Town/Town";
import Alchemist from "./Alchemist/Alchemist";
import Tavern from "./Tavern/Tavern";

import Items from "./Items";

if (typeof window !== "undefined") {
  window.Items = Items;
}

export default (() => {
  const generate = () => {
    return {
      town: Town.generate(),
      alchemist: {
        business: Alchemist.generate(),
        owner: NPC.generate(),
      },
      tavern: {
        business: Tavern.generate(),
        owner: NPC.generate(),
      },
    };
  };

  return {
    generate,
    NPC,
    Town,
    Alchemist,
    Tavern,
    Items,
  };
})();
