import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MyCenter from '../components/MyCenter';
import MyOrders from '../components/MyOrders';

class PersonalRouter extends Component{
  render() {
    return(
      <Switch>
        <Route exact path="/personal" component={MyCenter}/>
        <Route path="/personal/orders" component={MyOrders}/>
      </Switch>
    );
  }
}

export default PersonalRouter;