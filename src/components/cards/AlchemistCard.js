import React, { Component } from 'react';

import Alchemist from '../../models/Alchemist';

const alchemist = Alchemist.generate();

class TavernCard extends Component {

  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">The alchemist</h6>
        <h1 className="card__title  delay--2">{alchemist.name}</h1>
        <p className="delay--3">{alchemist.entrance}</p>
        <p className="delay--4">{alchemist.cleanliness}</p>
      </div>
    );
  }
};

export default TavernCard;
