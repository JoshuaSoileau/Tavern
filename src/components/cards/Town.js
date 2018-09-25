import React, { Component } from 'react';

import townModel from '../../models/Town';

class Town extends Component {
  render() {
    console.log(townModel.generate());
    return (
      <div className="card">
        <h1 className="delay-1">{townModel.generate()}</h1>
        <p className="delay-2">The town is dirty and run down, covered in a low grey misty fog that covers your eyes from seeing too deeply.</p>
        <p className="delay-3">The town is dirty and run down, covered in a low grey misty fog that covers your eyes from seeing too deeply.</p>
        <p className="delay-4">The town is dirty and run down, covered in a low grey misty fog that covers your eyes from seeing too deeply.</p>
      </div>
    );
  }
}

export default Town;
