import React, { Component } from 'react';

import Town from '../../models/Town';
const town = Town.generate();

class TownCard extends Component {

  render() {
    console.log(Town.generate());
    return (
      <div className="card">
        <h1 className="delay--1">{town.name}</h1>
        <p className="delay--2">{town.description}</p>
      </div>
    );
  }
}

export default TownCard;
