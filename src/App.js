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
          <li><Link to="/Pies">Pies</Link></li>
          <li><Link to="/Activism">Activism</Link></li>
          <li><Link to="/Allies">Allies</Link></li>
        </ul>
        <div>
          <div className="BearTypes">
          <li className="Bear">
            <img src={Grizzly} className="Grizzly" alt="Grizzly" />
            <p><b>Merp</b>
              <br />Favorite Pie: Black Walnut
              <br />Cause: Sustainble Food
              <br />Talent: Polka Dancing
              <br /><a className="waves-effect waves-light btn">Sponsor</a>
            </p>
          </li>
          <li className="Bear">
            <img src={Polar} className="Polar" alt="Polar" />
            <p><b>Derp</b>
              <br />Favorite Pie: Baked Alaska
              <br />Cause: Clean Energy
              <br />Talent: Sledding
              <br /><a className="waves-effect waves-light btn">Sponsor</a>
            </p>
          </li>
          <li className="Bear">
            <img src={Sloth} className="Sloth" alt="Sloth" />
            <p><b>Merpity</b>
              <br />Favorite Pie: Peach Rasberry
              <br />Cause: Healthcare
              <br />Talent: Baking
              <br /><a className="waves-effect waves-light btn">Sponsor</a>
            </p>
          </li>
          <li className="Bear">
            <img src={Spectacled} className="Spectacled" alt="Spectacled" />
            <p className="bear-files"><b>Derpity</b>
              <br />Favorite pie: Sweet Potato
              <br />Cause: Clean Water
              <br />Talent: Coding
              <br /><a className="waves-effect waves-light btn">Sponsor</a>
            </p>
          </li>
          </div>
        </div>
        <div className="Content">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
