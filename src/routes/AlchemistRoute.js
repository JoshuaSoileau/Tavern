import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

import AlchemistCard from "../components/cards/AlchemistCard";
import NpcCard from "../components/cards/NpcCard";

class AlchemistRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <BreadcrumbsItem to="/alchemist">
          <span className="title">Alchemist</span>
        </BreadcrumbsItem>

        <Switch location={this.props.location}>
          <Route
            exact
            path={this.props.match.path}
            render={(props) => <AlchemistCard {...props} {...this.props} />}
          />

          <Route
            path={`${this.props.match.path}/owner`}
            render={(props) => (
              <React.Fragment>
                <BreadcrumbsItem to={`${this.props.match.path}/owner`}>
                  <span className="title">Owner</span>
                </BreadcrumbsItem>
                <NpcCard
                  {...props}
                  {...this.props.owner}
                  owns={this.props.business.name}
                />
              </React.Fragment>
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AlchemistRoute;
