import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Navi from '../navi/Navi'
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom';
import CartDetail from '../cart/CartDetail';

export default class App extends Component {
  render() {
    return (
      <div>
         <Container fixed>
         <Navi/>
         <Switch>
           <Route path="/" exact component={Dashboard} />
           <Route path="/product" exact component={Dashboard} />
           <Route path="/cart" exact component={CartDetail} />
         </Switch>
         </Container>
      
      </div>
    )
  }
}
