import React, { Component } from 'react';

class NpcCard extends Component {

  render() {
    return (
      <div className="card">
        <h6 className="card__subtitle  delay--1">NPC</h6>
        <h1 className="card__title  delay--2">{this.props.name}</h1>
        <p className="delay--3">This is a character.</p>
        <p className="delay--4">{'{ character_description }'}</p>
        <p className="delay--5">{'{ character_backstory }'}</p>
      </div>
    );
  }
};

export default NpcCard;
