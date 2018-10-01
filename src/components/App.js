/**
 * Dependencies
 */
import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
import AlchemistCard from "./cards/AlchemistCard";

import Models from '../models';
import Town from '../models/Town';

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

console.log({data});

const App = ({ location }) => (
      <main className="App">
        <Breadcrumbs />
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={
            {
              enter: 350,
              exit: 175,
            }
          }>
            <Switch location={location}>
              <Route exact path="/" render={(props) => (
                <TownCard
                  {...props}
                  alchemist={data.alchemist}
                  tavern={data.tavern}
                  town={data.town} />
              )} />
              <Route path="/alchemist" render={(props) => (
                <AlchemistCard
                  {...props}
                  business={data.alchemist.business}
                  owner={data.alchemist.owner} />
              )} />
              <Route path="/tavern" render={(props) => (
                <TavernCard
                  {...props}
                  business={data.tavern.business}
                  owner={data.tavern.owner} />
              )} />
              <Route component={NoMatch} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
);

// export default withRouter(App);
export default withRouter(App);
