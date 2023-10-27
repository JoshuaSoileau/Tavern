import data from "./Tavern.json";

const Tavern = (() => {
  const name = () => {
    return "The " + data.adjective.random() + " " + data.noun.random();
  };

  const entrance = () => {
    return data.entranceDescription.random();
  };

  const atmosphere = () => {
    return data.atmosphereDescription.random();
  };

  const crowd = () => {
    return data.crowdDescription.random();
  };

  const generate = () => {
    return {
      name: name(),
      entrance: entrance(),
      atmosphere: atmosphere(),
      crowd: crowd(),
    };
  };

  return {
    generate,
  };
})();

export default Tavern;
