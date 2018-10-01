import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Models from '../models';
import NoMatch from '../components/_general/NoMatch';
import TownCard from '../components/cards/TownCard';

/**
 * Routes
 */
import TavernRoute from './TavernRoute';
import AlchemistRoute from './AlchemistRoute';



window.Models = Models;

const data = {
  town: Models.Town.generate(),
  alchemist: {
    business: Models.Alchemist.generate(),
    owner: Models.NPC.generate()
  },
  tavern: {
    business: Models.Tavern.generate(),
    owner: Models.NPC.generate()
  }
};

class TownRoute extends Component {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route exact path="/" render={(props) => (
          <TownCard {...props} {...data} />
        )} />

        <Route path="/alchemist" render={(props) => (
          <AlchemistRoute {...props} {...data.alchemist} />
        )} />

        <Route path="/tavern" render={(props) => (
          <TavernRoute {...props} {...data.tavern} />
        )} />

        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default TownRoute;