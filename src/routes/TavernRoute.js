import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import TavernCard from '../components/cards/TavernCard';
import NpcCard from '../components/cards/NpcCard';


class TavernRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <BreadcrumbsItem to='/tavern'><span className="title">Tavern</span></BreadcrumbsItem>

        <Switch location={this.props.location}>
          <Route exact path={this.props.match.path} render={(props) => (
            <TavernCard {...props} {...this.props} />
          )}/>

          <Route path={`${this.props.match.path}/owner`} render={(props) => (
            <React.Fragment>
              <BreadcrumbsItem to={`${this.props.match.path}/owner`}><span className="title">Owner</span></BreadcrumbsItem>
              <NpcCard {...props} {...this.props.owner} route={`${this.props.match.path}/owner`} title="tavern owner" />
            </React.Fragment>
          )}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default TavernRoute;