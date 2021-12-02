import React from 'react';
import Home from './Pages/Home'
import Login from './Pages/Login'
import GenerateCharts from './Pages/GenerateCharts'
import Historic from './Pages/Historic'
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './History';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
    return (
      <Router history={history}>
          <Switch>
              <Route exact path="/">
              <Home />
              </Route>
              <Route exact path="/Login">
              <Login />
              </Route>
              <Route exact path="/Logout">
              <Login />
              </Route>
              <PrivateRoute exact path="/Historico">
              <Historic />
              </PrivateRoute>
              <Route exact path="/GenerateCharts">
              <GenerateCharts />
              </Route>
          </Switch>
      </Router>
    );
  }