const Alchemist = (() => {
  const adjective = [
    "Bubbling",
    "Sprawling",
    "Spicy",
    "Foggy",
    "Fizzing",
    "Fizzy",
    "Popping",
    "Melting",
    "Misty",
    "Fuzzy",
    "Chemical",
    "Molding",
    "Opaque",
    "Clear",
    "Disiduous",
    "Metallic",
    "Silver",
    "Golden",
    "Stinky",
    "Expanding",
    "Soggy",
  ];

  const noun = [
    "Potion",
    "Vial",
    "Bottle",
    "Fumes",
    "Mortar & Pestle",
    "Alchemist",
    "Chemist",
    "Brewer",
    "Brewery",
    "Lotion",
    "Laboratory",
    "Juice Bar",
  ];

  const cleanlinessDescriptor = [
    "reasonably tidy. There are stack of paper here and there, loosely organized in a semi-thought out fashion.",
    "disastrously messy. There are papers strewn about, covering the floor. Potions & vials are splayed about in rambunctious fashion. It looks as though a small tornado had had it's way with the room.",
    "rather messy. There are scattered papers & vials strewn about the room. You can see a semi-thought out organization of the sections of the room, with one half being a a large wooden counter, with poorly made displays filled with all manner of things that may or may not be for sale.",
    "pristinely tidy. The ground is emaculate, clearly having been swept recently. The counter is almost empty, save for 3 perfectly thought out display cases showcasing the most potent potions available.",
  ];

  const name = (() => {
    return 'The ' + adjective.random() + ' ' + noun.random();
  })();

  const cleanliness = (() => {
    return 'The room is ' + cleanlinessDescriptor.random();
  })();

  const generate = () => {
    return {
      name,
      cleanliness
    };
  };

  return {
    generate
  };
})();

export default Alchemist;
