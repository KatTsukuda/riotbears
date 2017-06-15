import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';
import Grizzly from './grizzly.png';
import Polar from './polar.png';
import Sloth from './sloth.png';
import Spectacled from './spectacled.png';
import BlackWalnutPie from './containers/BlackWalnutPie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(), 1000 // time counter ticks by second
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <Link to="/"><h2>Riot Bears</h2></Link>
        <p>pie advocates for peace since 1987</p>
        <ul className="Nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/BlackWalnut">Pie of the Month</Link></li>
        </ul>
        <div>
        <h6>Local Pie Time: {this.state.date.toLocaleTimeString()}</h6>
          <div className="BearTypes">
          <li className="Bear">
            <img src={Grizzly} className="Grizzly" alt="Grizzly" />
            <p><b>Merp</b>
              <br />"Make pies not war."
            </p>
          </li>
          <li className="Bear">
            <img src={Sloth} className="Polar" alt="Polar" />
            <p><b>Derp</b>
              <br />"Pie is love."
            </p>
          </li>
          <li className="Bear">
            <img src={Polar} className="Polar" alt="Polar" />
            <p><b>Argh</b>
              <br />"Dreams are made of pie."
            </p>
          </li>
          <li className="Bear">
            <img src={Spectacled} className="Polar" alt="Polar" />
            <p><b>Blarg</b>
              <br />"Success is eating humble pie."
            </p>
          </li>
          </div>
        </div>
        <div className="Recipes">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
