import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import ValidOrders from '../components/ValidOrders';
import Unpaid from '../components/Unpaid';
import Unreceived from '../components/Unreceived';
import Closed from '../components/Closed';

class OrdersRouter extends Component{
  render() {
    return(
      <Switch>
        <Route exact path="/personal/orders" component={ValidOrders}/>
        <Route path="/personal/orders/tobepaid" component={Unpaid}/>
        <Route path="/personal/orders/tobereceived" component={Unreceived}/>
        <Route path="/personal/orders/closed" component={Closed}/>
      </Switch>
    );
  }
}

export default OrdersRouter;