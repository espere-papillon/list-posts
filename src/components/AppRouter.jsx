import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../router/routes"
import {AuthContext} from '../context'
import {Loader} from "./UI/loader/Loader"

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
    ? <Switch>
        {privateRoutes.map(route => <Route key={route.path} component={route.component} path={route.path} exact={route.exact}/>)}
        <Redirect to={"/posts"}/>
      </Switch>
    : <Switch>
        {publicRoutes.map(route => <Route key={route.path} component={route.component} path={route.path} exact={route.exact}/>)}
        <Redirect to={"/login"}/>
      </Switch>
  );
};
