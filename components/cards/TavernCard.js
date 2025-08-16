import React, { Component } from "react";
import { Link } from "react-router-dom";

import icons from "@/icons";

const IconTavern = icons.beer.random();

class TavernCard extends Component {
  render() {
    return (
      <div className="card">
        <IconTavern className="icon icon--card icon--castle  fade--1" />
        <h6 className="card__subtitle  delay--2">The tavern</h6>
        <h1 className="card__title  delay--3">{this.props.business.name}</h1>
        <p className="delay--4">{this.props.business.entrance}</p>
        <p className="delay--5">{this.props.business.atmosphere}</p>
        <p className="delay--6">{this.props.business.crowd}</p>
        <p className="delay--9">
          The tavern owner,{" "}
          <Link to={`${this.props.match.url}/owner`}>
            {this.props.owner.name}
          </Link>
          , is near the fire, stoking it with more wood.
        </p>
      </div>
    );
  }
}

export default TavernCard;
