import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Center from '../components/Center';
import Orders from '../containers/Orders';

class PersonalRouter extends Component{
  render() {
    return(
      <Switch>
        <Route exact path="/personal" component={Center}/>
        <Route path="/personal/orders" component={Orders}/>
      </Switch>
    );
  }
}

export default PersonalRouter;