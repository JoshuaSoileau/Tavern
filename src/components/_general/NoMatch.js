import React, { Component } from 'react';

class NoMatch extends Component {

  render() {
    return (
      <div className="card">
        <h1 className="delay--1">Uh oh.</h1>
        <p className="delay--2">You took a wrong turn and are lost.</p>
        <p className="delay--3">Also, you stub your toe on a rock. Rough afternoon, all around.</p>
      </div>
    );
  }
}

export default NoMatch;
