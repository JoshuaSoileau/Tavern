/* eslint-disable no-undef */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Inventory from "../_general/Inventory";

import icons from "@/icons";

const IconAlchemist = icons.cauldron.random();

class TavernCard extends Component {
  render() {
    const { business } = this.props;
    console.log(business.inventory);

    return (
      <div className="card">
        <IconAlchemist className="icon icon--card icon--castle  fade--1" />
        <h6 className="card__subtitle  delay--2">The alchemist</h6>
        <h1 className="card__title  delay--3">{business.name}</h1>
        <p className="delay--4">{business.entrance}</p>
        <p className="delay--5">{business.cleanliness}</p>
        <p className="delay--6">
          The owner,{" "}
          <Link to={`${this.props.match.url}/owner`}>
            {this.props.owner.name}
          </Link>
          , is behind the counter brewing in a bubbling cauldron.
        </p>
        <Inventory items={business.inventory} offset={7} />
      </div>
    );
  }
}

export default TavernCard;
