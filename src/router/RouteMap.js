import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from '../containers/Index';
import Category from '../containers/Category';

import Item from '../containers/Item';
import Login from '../containers/Login';
import Cart from '../containers/Cart';
import Personal from '../containers/Personal';
import VerifyOrder from '../containers/VerifyOrder';
import Success from '../components/Success';
import Orders from '../containers/Orders';

class RouteMap extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/form/:type/:id1/:id2?" component={Category}/>
            {/*<Route path="/form/:type/:catId1/:catId2" component={Category}/>*/}
            <Route path="/item/:itemId" component={Item}/>
            <Route path="/login" component={Login}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/personal" component={Personal}/>
            <Route path="/success" component={Success}/>
            <Route path="/verify/order" component={VerifyOrder}/>
            {/*<Route exact path="/personal" component={Center}/>*/}
            <Route path="/personal/orders" component={Orders}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouteMap;
