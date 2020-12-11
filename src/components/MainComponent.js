import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dish: DISHES,
      selectedDish: null
    }
  }


  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/menu' component = {() => <Menu dishes={this.state.dish} /> } />  
          <Route path='/home' component={HomePage} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
