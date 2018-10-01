/**
 * Utils/Polyfills
 */
import './utils/_array-random';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from "react-router-dom";


ReactDOM.render((
  <BrowserRouter>
    <Route component={App}/>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
