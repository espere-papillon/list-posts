import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../router/routes"

export const AppRouter = () => {
  const isAuth = false
  return (
    isAuth
    ? <Switch>
        {privateRoutes.map(route => <Route component={route.component} path={route.path} exact={route.exact}/>)}
        <Redirect to={"/post"}/>
      </Switch>
    : <Switch>
        {publicRoutes.map(route => <Route component={route.component} path={route.path} exact={route.exact}/>)}
        <Redirect to={"/login"}/>
      </Switch>
  );
};
