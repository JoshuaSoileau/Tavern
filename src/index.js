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
import { Provider } from 'react-redux';

import store from './redux/store';

ReactDOM.render((
  <Provider store={store}>
    <ThroughProvider>
      <BrowserRouter>
        <Route component={App}/>
      </BrowserRouter>
    </ThroughProvider>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
