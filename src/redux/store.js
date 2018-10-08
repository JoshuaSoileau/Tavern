import { createStore } from 'redux';
import reducers from './reducers';

const defaultState = {
  world: {
    town: null,
    tavern: null,
    alchemist: null,
  }
};

const store = createStore(
  reducers,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
