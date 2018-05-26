import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Home from './components/Home';


export default () => {
 return (
     <BrowserRouter>
       <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Redirect to="/login"  />
       </Switch>
  </BrowserRouter>
 )
}
