import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.count = this.count.bind(this);
    this.state = {
      length: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onKeyUp={this.count}></textarea>
        <div className="counter">{this.state.length}</div>
      </div>
    );
  }
  count(e) {
    this.setState({ length: e.target.value.length });
  }
}

export default App;
