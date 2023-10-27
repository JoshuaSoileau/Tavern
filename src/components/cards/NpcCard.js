import React, { Component } from "react";

class NpcCard extends Component {
  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">NPC</h6>
        <h1 className="card__title  delay--2">{this.props.name}</h1>
        <p className="delay--3">
          {this.props.owns ? (
            <p className="delay--3">
              {this.props.firstname}, a {this.props.malefemale}{" "}
              {this.props.race} {this.props.class}, is the proprietor of{" "}
              <strong>{this.props.owns}</strong>.
            </p>
          ) : (
            <p className="delay--3">
              {this.props.firstname} is a {this.props.malefemale}{" "}
              {this.props.race} {this.props.class}.
            </p>
          )}
        </p>
        <p className="delay--4">{"{ character_description }"}</p>
        <p className="delay--5">{"{ character_backstory }"}</p>
      </div>
    );
  }
}

export default NpcCard;
