import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import store from "../redux/store";

import NoMatch from "../components/_general/NoMatch";
import TownCard from "../components/cards/TownCard";

/**
 * Routes
 */
import TavernRoute from "./TavernRoute";
import AlchemistRoute from "./AlchemistRoute";

window.store = store;

class TownRoute extends Component {
  constructor() {
    super();

    this.state = {
      town: null,
      tavern: null,
      alchemist: null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <BreadcrumbsItem to="/">
          <span className="title">Town</span>
        </BreadcrumbsItem>

        <Switch location={this.props.location}>
          <Route
            exact
            path="/"
            render={(props) => <TownCard {...props} {...this.props.world} />}
          />

          <Route
            path="/alchemist"
            render={(props) => (
              <AlchemistRoute {...props} {...this.props.world.alchemist} />
            )}
          />

          <Route
            path="/tavern"
            render={(props) => (
              <TavernRoute {...props} {...this.props.world.tavern} />
            )}
          />

          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default TownRoute;
