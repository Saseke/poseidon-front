import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from '../containers/Index';
import Category from '../containers/Category';

import Item from '../containers/Item';
import Login from '../containers/Login';
import Cart from '../containers/Cart';
import AddCartSuccess from '../containers/AddCartSuccess';
import CheckOrder from '../containers/CheckOrder';
import MyCenter from '../containers/MyCenter';

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
            <Route path="/addsucc" component={AddCartSuccess}/>
            <Route path="/checkorder" component={CheckOrder}/>
            <Route path="/mycenter" component={MyCenter}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouteMap;
