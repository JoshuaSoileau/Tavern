import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icons from '../../icons';

const IconAlchemist = icons.cauldron.random();

class TavernCard extends Component {

  render() {
    return (
      <div className="card">
        <IconAlchemist className="icon icon--card icon--castle  fade--1" />
        <h6 className="card__subtitle  delay--2">The alchemist</h6>
        <h1 className="card__title  delay--3">{this.props.business.name}</h1>
        <p className="delay--4">{this.props.business.entrance}</p>
        <p className="delay--5">{this.props.business.cleanliness}</p>
        <p className="delay--6">The owner, <Link to={`${this.props.match.url}/owner`}>{this.props.owner.name}</Link>, is behind the counter brewing in a bubbling cauldron.</p>
      </div>
    );
  }
};

export default TavernCard;
