import React, { Component } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Intro from './components/Intro'
import Logos from './components/Logos';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Greeting />
        <Logos />
      </div>
    );
  }
}

export default App;
