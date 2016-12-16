import React, { Component } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Intro from './components/Intro'
import Logos from './components/Logos';
import Military from './components/Military'
import Family from './components/Family'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Greeting />
        <Logos />
        <Military />
        <Family />
      </div>
    );
  }
}

export default App;
