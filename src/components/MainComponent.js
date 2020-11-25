import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';


class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dish: DISHES,
      selectedDish: null
    }
  }

  selectDish(dishID){
    this.setState(
      {selectedDish: dishID}
    )
  }

  render() {
    return (
      <div>
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dish} 
        onClick={(dishID)=> this.selectDish(dishID)}
        />
        <Dishdetail dish={this.state.dish.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
