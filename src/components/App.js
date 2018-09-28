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

const App = () => (
      <main className="App">
        <Breadcrumbs />
        <Route render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup>
              <CSSTransition key={pathname} classNames="page" timeout={{
                  enter: 175,
                  exit: 350,
                }}
              >
                <Route location={location} render={() => (
                    <Switch>
                      <Route exact path="/" component={TownCard} />
                      <Route path="/alchemist" component={AlchemistCard} />
                      <Route path="/tavern" component={TavernCard} />
                      <Route component={NoMatch} />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }}
        />
      </main>
);

// export default withRouter(App);
export default withRouter(App);
