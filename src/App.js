import React, { Component } from 'react';
import './App.css';

import TownCard from './components/cards/TownCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TownCard />
      </div>
    );
  }
}

export default App;
