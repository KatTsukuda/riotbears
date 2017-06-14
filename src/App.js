import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Riot Bears</h2>
        <ul className="Nav">
          <li><Link to="/Pies">Pies</Link></li>
          <li><Link to="/Activism">Activism</Link></li>
          <li><Link to="/Activism">Allies</Link></li>
        </ul>
        <div className="Content">
        STUFF
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
