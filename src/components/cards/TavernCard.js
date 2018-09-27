import React, { Component } from 'react';

class TavernCard extends Component {

  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">The tavern</h6>
        <h1 className="card__title  delay--2">Hogsmead</h1>
        <p className="delay--3">This is the tavern.</p>
      </div>
    );
  }
}

export default TavernCard;
