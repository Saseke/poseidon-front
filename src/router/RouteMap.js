import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from '../components/Index';
import Category from '../components/Category';

import Item from '../components/Item';
import Login from '../components/Login';
import Cart from '../components/Cart';

class RouteMap extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/form/:type/:panelId" component={Category}/>
            <Route path="/form/:type/:catId1/:catId2" component={Category}/>
            <Route path="/item/:itemId" component={Item}/>
            <Route path="/login" component={Login}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouteMap;
