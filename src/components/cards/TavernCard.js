import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icons from '../../icons';

const IconTavern = icons.beer.random();

class TavernCard extends Component {

  render() {
    return (
      <div className="card">
        <IconTavern className="icon icon--card icon--castle  fade--1" />
        <h6 className="card__subtitle  delay--2">The tavern</h6>
        <h1 className="card__title  delay--3">{this.props.business.name}</h1>
        <p className="delay--4">{`{ entrance_description }`}</p>
        <p className="delay--5">This is the tavern.</p>
        <p className="delay--6">{`{ tavern_description }`}</p>
        <p className="delay--7">{`{ owner_description_with_link }`}</p>
        <p className="delay--8">Owner: <Link to={`${this.props.match.url}/owner`}>{this.props.owner.name}</Link>.</p>
        <p className="delay--9">{`{ owner_action_description }`}</p>
      </div>
    );
  }
};

export default TavernCard;
