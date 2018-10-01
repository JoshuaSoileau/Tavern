import React, { Component } from 'react';
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";

import AlchemistCard from '../components/cards/AlchemistCard';
import TavernCard from '../components/cards/TavernCard';

import Models from '../models';
import Town from '../models/Town';
import TownCard from '../components/cards/TownCard';

window.Models = Models;

const data = {
  town: Town.generate(),
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
      <Switch>
        <Route exact path={`/`} render={(props) => (
          <TownCard
            {...props}
            {...data}
          />
        )} />
        <Route path={`/tavern`} render={(props) => (
          <TavernCard
            {...props}
            business={data.tavern.business}
            owner={data.tavern.owner}
          />
        )} />
        <Route path={`/alchemist`} render={(props) => (
          <AlchemistCard
            {...props}
            business={data.alchemist.business}
            owner={data.alchemist.owner}
          />
        )} />
      </Switch>
    );
  }
}

export default TownRoute;