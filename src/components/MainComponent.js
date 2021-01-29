import React, { Component } from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions  
  }  
};

class Main extends Component {

  constructor(props){
    super(props);

  }

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }

    const DishWithID = ({match}) => {
      return(
        <Dishdetail dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments = {this.props.comments.filter(com => com.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    const AboutUs = () => {
      return(
        <About leaders = {this.props.leaders}/>
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/menu' component = {() => <Menu dishes={this.props.dishes} /> } />  
          <Route path='/home' component={HomePage} />
          <Route path="/menu/:dishId" component={DishWithID} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
