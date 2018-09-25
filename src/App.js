import React, { Component } from 'react';
import './App.css';

import Town from './components/cards/Town';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Town />
      </div>
    );
  }
}

export default App;
