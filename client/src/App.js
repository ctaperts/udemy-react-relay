import React, { Component } from 'react';

import Home from './components/Home/Home';
import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <div>
        <Home name="colby" />
        <Card />
      </div>
    )
  }
}

export default App;
