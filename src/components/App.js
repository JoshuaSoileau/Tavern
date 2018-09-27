/**
 * Dependencies
 */
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

/**
 * Stylesheet
 */
import '../scss/App.css';

/**
 * Local components
 */
import Breadcrumbs from './_general/Breadcrumbs';
import NoMatch from './_general/NoMatch';
import TownCard from './cards/TownCard';
import TavernCard from "./cards/TavernCard";

class App extends Component {
  render() {
    return <div className="App">
        <Breadcrumbs />
        <Switch>
          <Route path="/tavern" component={TavernCard} />
          <Route path="/lost" component={NoMatch} />
          <Route component={TownCard} />
        </Switch>
      </div>;
  }
}

export default App;
