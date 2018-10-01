import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import TavernCard from '../components/cards/TavernCard';
import NpcCard from '../components/cards/NpcCard';


class TavernRoute extends Component {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route exact path={this.props.match.path} render={(props) => (
          <TavernCard {...props} {...this.props} />
        )}/>

        <Route path={`${this.props.match.path}/owner`} render={(props) => (
          <NpcCard {...props} {...this.props.owner} />
        )}/>
      </Switch>
    );
  }
}

export default TavernRoute;