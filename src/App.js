import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import Grizzly from './grizzly.png';
import Polar from './polar.png';
import Sloth from './sloth.png';
import Spectacled from './spectacled.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"><h2>Riot Bears</h2></Link>
        <ul className="Nav">
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
          <div className="BearTypes">
          <li className="Bear">
            <img src={Grizzly} className="Grizzly" alt="Grizzly" />
            <p><b>Merp</b>
              <br />Spirit Pie: Black Walnut
              <br /><Link to="/BlackWalnut"><a className="waves-effect waves-light btn"><i className="fa fa-heart" aria-hidden="true"></i></a></Link>
            </p>
          </li>
          <li className="Bear">
            <img src={Polar} className="Polar" alt="Polar" />
            <p><b>Derp</b>
              <br />Spirit Pie: Blackberry Pear
              <br /><a className="waves-effect waves-light btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
            </p>
          </li>
          </div>
        </div>
        <div className="Pies">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
