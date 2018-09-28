import React, { Component } from 'react';

import Town from '../../models/Town';
import NPC from '../../models/NPC';

const town = Town.generate();
const tavernOwner = NPC.generate();
const alchemistOwner = NPC.generate();
class TownCard extends Component {

  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">The town of</h6>
        <h1 className="card__title  delay--2">{town.name}</h1>
        <p className="delay--3">{town.description}</p>
        <p className="delay--4">Tavern Owner: {tavernOwner.name}</p>
        <p className="delay--5">Alchemist Owner: {alchemistOwner.name}</p>
      </div>
    );
  }
};

export default TownCard;
