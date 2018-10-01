import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TavernCard extends Component {

  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">The tavern</h6>
        <h1 className="card__title  delay--2">{this.props.business.name}</h1>
        <p className="delay--3">This is the tavern.</p>
        <p className="delay--4">Owner: <Link to={`${this.props.match.url}/owner`}>{this.props.owner.name}</Link>.</p>
      </div>
    );
  }
};

export default TavernCard;