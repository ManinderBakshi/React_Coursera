import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      selectedDish: null
    }
  }

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }

    const DishWithID = ({match}) => {
      return(
        <Dishdetail dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments = {this.state.comments.filter(com => com.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/menu' component = {() => <Menu dishes={this.state.dishes} /> } />  
          <Route path='/home' component={HomePage} />
          <Route path="/menu/:dishId" component={DishWithID} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
