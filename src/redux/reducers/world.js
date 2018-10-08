import { SET_WORLD, SET_ALCHEMIST, SET_TAVERN, SET_TOWN } from '../actions/types';

const world = (state = {}, action) => {
  let newState = null;

  switch (action.type) {
    case SET_WORLD:
      return action.data;
    case SET_TOWN:
      if (!state.world) return state;

      newState = { ...state };
      newState.world.town = action.data;

      return newState;
    case SET_TAVERN:
    if (!state.world) return state;

      newState = { ...state };
      newState.world.tavern = action.data;

      return newState;
    case SET_ALCHEMIST:
      if (!state.world) return state;

      newState = { ...state };
      newState.world.alchemist = action.data;

      return newState;
    default:
      return state;
  }
};

export default world;
