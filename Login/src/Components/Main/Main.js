import React from 'react'
import Login from '../Login/Login';
import Registro from '../Registro/Registro';
import Navigation from '../Navigation/Navigation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export const Main = () => {
  return (
      <>
      <Router>
        <Navigation />
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/registro">
                <Registro />
            </Route>
            <Redirect from="/" to="login" />
        </Switch>  
      </Router>
      </>

  )
}