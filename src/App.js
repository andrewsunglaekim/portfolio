import React, { Component } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Intro from './components/Intro'
import Logos from './components/Logos';
import Military from './components/Military'
import Parents from './components/Parents'
import Kids from './components/Kids'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Greeting />
        <Military />
        <Parents />
        <Kids />
        <Logos />
      </div>
    );
  }
}

export default App;
