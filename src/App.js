import React, { Component } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Logos from './components/Logos';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Logos />
      </div>
    );
  }
}

export default App;
