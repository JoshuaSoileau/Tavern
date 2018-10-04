import React, { Component } from 'react';
import { Link } from "react-router-dom";

import IconCastle from '../../icons/icon--castle';

class TownCard extends Component {

  render() {
    return (
      <div className="card">
        <IconCastle className="icon icon--card icon--castle" />
        <h6 className="card__subtitle  delay--1">The town of</h6>
        <h1 className="card__title  delay--2">{this.props.town.name}</h1>
        <p className="delay--3">{this.props.town.description}</p>
        <p className="delay--4">The primary road in {this.props.town.name} is {this.props.town.primaryRoad.name}. {this.props.town.primaryRoad.description}</p>
        <p className="delay--5">You can see on the left of {this.props.town.primaryRoad.name} a tavern, with a sign inscribed with <Link to={`/tavern`}>{this.props.tavern.business.name}</Link>.</p>
        <p className="delay--6">Further down {this.props.town.primaryRoad.name} is an alchemy lab named <Link to={`/alchemist`}>{this.props.alchemist.business.name}</Link>.</p>
      </div>
    );
  }
};

export default TownCard;
