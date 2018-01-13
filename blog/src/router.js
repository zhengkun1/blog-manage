import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Basiclayout from './layout/Basiclayout';
import Loginpage from './layout/loginpage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Loginpage} />
        <Route path="/" component={Basiclayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
