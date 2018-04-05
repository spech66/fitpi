import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dazzle/lib/style/style.css';
import './App.css';

class App extends Component {

  state = { motivations: []};

  componentDidMount() {
    fetch('/motivations')
      .then(res => res.json())
      .then(motivations => this.setState({ motivations }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Motivations</h1>
        {this.state.motivations.map(motivation =>
          <div key={motivation.id}>{motivation.text}</div>
        )}

      </div>
    );
  }
}

export default App;
