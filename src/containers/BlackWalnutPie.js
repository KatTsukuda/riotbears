import React, {Component} from 'react';
import BlackWalnutPie from './blackwalnutpie.jpg';

class BlackWalnut extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hearts: "5"
    }
    this._handleHeartsClick = this._handleHeartsClick.bind(this)
  }

  _handleHeartsClick (e) {
  e.preventDefault()
  let newHeart = +this.state.hearts + 1;
  this.setState({
    hearts: newHeart
  })
}

  render() {
    let heartsClass = 'hearts';

    return (
      <div>
        <div>

        </div>
        <h5 className="PieRecipes">
          Black Walnut Pie
          <a className="waves-effect waves-light btn" value="Hearts" onClick={this._handleHeartsClick}><li className={heartsClass}>{this.state.hearts}</li> ♥</a>
        </h5>
        <img src={BlackWalnutPie} className="PiePic" alt="Black Walnut Pie" />
        <table>
          <thead>
            <tr>
              <th>TOTAL TIME: 80 min.</th>
              <th>MAKES: 8 servings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Ingredients</th>
            </tr>
            <tr>
              <td>1/2 cup plus 1 tablespoon sugar, divided</td>
            </tr>
            <tr>
              <td>1 tablespoon all-purpose flour</td>
            </tr>
            <tr>
              <td>1 unbaked pastry shell (9 inches)</td>
            </tr>
            <tr>
              <td>1 cup light corn syrup</td>
            </tr>
            <tr>
              <td>1/2 cup packed brown sugar</td>
            </tr>
            <tr>
              <td>3 tablespoons butter</td>
            </tr>
            <tr>
              <td>3 large eggs, lightly beaten</td>
            </tr>
            <tr>
              <td>1 cup chopped black walnuts</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>Directions</th>
            </tr>
            <tr>
              <td>1) Combine 1 tablespoon sugar and flour. Sprinkle into the pastry shell; set aside.</td>
            </tr>
            <tr>
              <td>2) In a small saucepan, bring the corn syrup, brown sugar and remaining sugar just to a boil. Remove from the heat; stir in butter until melted. Let cool for 3 minutes.</td>
            </tr>
            <tr>
              <td>3) Gradually stir eggs into hot mixture. Add walnuts and mix well. Pour into pastry shell. Bake at 325° for 55-60 minutes or until top is browned. Yield: 8 servings.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BlackWalnut;
