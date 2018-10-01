import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import AlchemistCard from '../components/cards/AlchemistCard';
import NpcCard from '../components/cards/NpcCard';


class AlchemistRoute extends Component {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route exact path={this.props.match.path} render={(props) => (
          <AlchemistCard {...props} {...this.props} />
        )}/>
        
        <Route path={`${this.props.match.path}/owner`} render={(props) => (
          <NpcCard {...props} {...this.props.owner} />
        )}/>
      </Switch>
    );
  }
}

export default AlchemistRoute;