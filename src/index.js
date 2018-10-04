/**
 * Utils/Polyfills
 */
import './utils/_array-random';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import { ThroughProvider } from 'react-through';

import { createStore } from 'redux';
import todoApp from './redux/reducers';


import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './redux/actions'

const store = createStore(todoApp);
// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()

ReactDOM.render((
  <ThroughProvider>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </ThroughProvider>
), document.getElementById('root'));

registerServiceWorker();
