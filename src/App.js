import React, { Component } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Intro from './components/Intro'
import Logos from './components/Logos';
import Military from './components/Military'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Greeting />
        <Logos />
        <Military />
      </div>
    );
  }
}

export default App;
