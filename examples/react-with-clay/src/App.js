import React, { Component } from 'react';
import ClayButton from 'clay-button';
import logo from './logo.svg';
import './App.css';
import 'clay-badge';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          count: 0
      };
  }

  componentDidMount() {
      this.clayButton = new ClayButton({
          label: 'Click (Instance)',
          style: 'secondary'
      }, '#container');

      this.clayButton.on('click', this.handleClickButton.bind(this));
  }

  handleClickButton() {
      this.setState({
          count: this.state.count + 1
      });
  }

  componentWillUnmount() {
      this.clayButton.dispose();
      this.clayButton = null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-desc">
          <p><clay-badge label={`"${this.state.count}"`}></clay-badge></p>
          <p id="container" className="App-intro">
            <clay-button label="Click (WebComponent)" onClick={this.handleClickButton.bind(this)}></clay-button>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
