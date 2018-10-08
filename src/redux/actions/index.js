import { SET_TOWN, SET_TAVERN, SET_ALCHEMIST, SET_WORLD } from './types';

export const setTown = (town) => ({
  type: SET_TOWN,
  data: town
});

export const setTavern = (tavern) => ({
  type: SET_TAVERN,
  data: tavern
});

export const setAlchemist = (alchemist) => ({
  type: SET_ALCHEMIST,
  data: alchemist
});

export const setWorld = (world) => ({
  type: SET_WORLD,
  data: world
});

