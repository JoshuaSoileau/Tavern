/**
 * Dependencies
 */
import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/**
 * Stylesheet
 */
import './scss/App.css';

/**
 * Local components
 */
import Breadcrumbs from './components/_general/Breadcrumbs';
import TownRoute from './routes/TownRoute';
import Models from './models';
import Town from './models/Town/Town';

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

const App = (props) => (
      <main className="App">
        <Breadcrumbs />
        <TransitionGroup>
          <CSSTransition key={props.location.key} classNames="page" timeout={
            {
              enter: 350,
              exit: 175,
            }
          }>
            <TownRoute {...props} />
          </CSSTransition>
        </TransitionGroup>
      </main>
);

// export default withRouter(App);
export default withRouter(App);
