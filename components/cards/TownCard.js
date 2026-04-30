import React, { Component } from "react";
import Link from "next/link";

import icons from "@/icons";

const IconCastle = icons.castle.random();
const IconTavern = icons.beer.random();
const IconAlchemist = icons.cauldron.random();

class TownCard extends Component {
  render() {
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
            <Link
              aria-label={this.props.tavern.business.name}
              className="card__location-icon-link"
              href="/tavern"
            >
              <IconTavern className="card__location-icon icon" />
            </Link>
            <span className="card__location-description">
              You can see on the left of {this.props.town.primaryRoad.name} a{" "}
              <Link className="card__location-type" href="/tavern">
                <strong>tavern</strong>
              </Link>
              , with a sign inscribed with{" "}
              <Link href="/tavern">{this.props.tavern.business.name}</Link>.
            </span>
          </p>
          <p className="card__location-link delay--8">
            <Link
              aria-label={this.props.alchemist.business.name}
              className="card__location-icon-link card__location-icon-link--cauldron"
              href="/alchemist"
            >
              <IconAlchemist className="card__location-icon icon" />
            </Link>
            <span className="card__location-description">
              Further down {this.props.town.primaryRoad.name} is an{" "}
              <Link className="card__location-type" href="/alchemist">
                <strong>alchemy lab</strong>
              </Link>{" "}
              named{" "}
              <Link href="/alchemist">
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
