import React, { Component } from "react";
import Inventory from "../_general/Inventory";

class NpcCard extends Component {
  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">NPC</h6>
        <h1 className="card__title  delay--2">{this.props.name}</h1>
        <p className="delay--3">
          {this.props.owns ? (
            <>
              {this.props.firstname}, a {this.props.malefemale}{" "}
              {this.props.race} {this.props.class}, is the proprietor of{" "}
              <strong>{this.props.owns}</strong>.
            </>
          ) : (
            <>
              {this.props.firstname} is a {this.props.malefemale}{" "}
              {this.props.race} {this.props.class}.
            </>
          )}
        </p>
        <p className="delay--4">
          {this.props.firstname} has {this.props.hairType}{" "}
          {this.props.hairColor} hair and the practiced confidence of someone
          who knows every corner of the room. Locals know {this.props.himher} as
          a {this.props.class} first and a proprietor second.
        </p>
        <p className="delay--5">
          Years of odd jobs, passing adventurers, and hard bargains taught{" "}
          {this.props.firstname} which goods are worth keeping close.{" "}
          {this.props.heshe[0].toUpperCase() + this.props.heshe.slice(1)} keeps
          this personal stock separate from the public shelves.
        </p>
        {this.props.inventory?.length ? (
          <>
            <h5 className="card__locations-title delay--6">
              Personal Inventory
            </h5>
            <Inventory items={this.props.inventory} offset={7} />
          </>
        ) : null}
      </div>
    );
  }
}

export default NpcCard;
