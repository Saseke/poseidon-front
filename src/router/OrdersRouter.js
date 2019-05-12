import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Order from '../containers/Order';

class OrdersRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/personal/orders/:op" component={Order}/>
      </Switch>
    );
  }
}

export default OrdersRouter;