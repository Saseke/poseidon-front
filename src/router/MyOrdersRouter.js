import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import AllValidOrder from '../components/AllValidOrder';
import ToBePaid from '../components/ToBePaid';
import ToBeReceived from '../components/ToBeReceived';
import Closed from '../components/Closed';

class MyOrdersRouter extends Component{
  render() {
    return(
      <Switch>
        <Route exact path="/personal/orders" component={AllValidOrder}/>
        <Route path="/personal/orders/tobepaid" component={ToBePaid}/>
        <Route path="/personal/orders/tobereceived" component={ToBeReceived}/>
        <Route path="/personal/orders/closed" component={Closed}/>
      </Switch>
    );
  }
}

export default MyOrdersRouter;