import data from "./Road.json";

const Road = (() => {
  const getName = () => {
    return data.adjective.random() + " " + data.noun.random();
  };

  const generate = () => {
    const name = getName();
    const description = `It is ${data.width.random()}, ${data.length.random()}, and  ${data.cleanliness.random()}.`;

    return {
      name,
      description,
    };
  };

  return {
    generate,
  };
})();

export default Road;
