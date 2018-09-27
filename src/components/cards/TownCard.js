import React, { Component } from 'react';

import Town from '../../models/Town';
const town = Town.generate();

class TownCard extends Component {

  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">The town of</h6>
        <h1 className="card__title  delay--2">{town.name}</h1>
        <p className="delay--3">{town.description}</p>
      </div>
    );
  }
}

export default TownCard;
