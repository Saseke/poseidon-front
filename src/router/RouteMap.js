import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Index from '../components/Index';
import Category from '../components/Category';
import Item from '../components/Item';

class RouteMap extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/cat/:cId" component={Category}/>
            <Route path="/item/:itemId" component={Item}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RouteMap;