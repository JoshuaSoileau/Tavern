import * as data from './data';

export default (() => {

  const all = data.default;

  const matches = (key, value) => {
    return all.filter((item) => {
      return item[key] && item[key] === value;
    });
  };

  return {
    all,
    matches
  }
})();