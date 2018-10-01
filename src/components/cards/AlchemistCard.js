import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TavernCard extends Component {

  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">The alchemist</h6>
        <h1 className="card__title  delay--2">{this.props.business.name}</h1>
        <p className="delay--3">{this.props.business.entrance}</p>
        <p className="delay--4">{this.props.business.cleanliness}</p>
        <p className="delay--5">The owner, <Link to={`${this.props.match.url}/owner`}>{this.props.owner.name}</Link>, is behind the counter brewing in a bubbling cauldron.</p>
      </div>
    );
  }
};

export default TavernCard;
