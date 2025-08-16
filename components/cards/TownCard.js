/* eslint-disable no-undef */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import icons from "@/icons";

const IconCastle = icons.castle.random();
const IconTavern = icons.beer.random();
const IconAlchemist = icons.cauldron.random();

class TownCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        {/* {icons.castle.random()} */}
        <IconCastle className="icon icon--card icon--castle  delay--1" />
        <h6 className="card__subtitle  delay--2">The town of</h6>
        <h1 className="card__title  delay--3">{this.props.town.name}</h1>
        <p className="delay--4">{this.props.town.description}</p>
        <p className="delay--5">
          The primary road in {this.props.town.name} is{" "}
          {this.props.town.primaryRoad.name}.{" "}
          {this.props.town.primaryRoad.description}
        </p>
        <div className="card__locations">
          <h5 className="card__locations-title  delay--6">Locations of Note</h5>
          <p className="card__location-link delay--7">
            <IconTavern className="card__location-icon  icon" />
            <span className="card__location-description">
              You can see on the left of {this.props.town.primaryRoad.name} a{" "}
              <strong>tavern</strong>, with a sign inscribed with{" "}
              <Link to={`/tavern`}>{this.props.tavern.business.name}</Link>.
            </span>
          </p>
          <p className="card__location-link delay--8">
            <IconAlchemist className="card__location-icon card__location-icon--cauldron  icon" />
            <span className="card__location-description">
              Further down {this.props.town.primaryRoad.name} is an{" "}
              <strong>alchemy lab</strong> named{" "}
              <Link to={`/alchemist`}>
                {this.props.alchemist.business.name}
              </Link>
              .
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default TownCard;
