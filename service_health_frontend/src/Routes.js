import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./containers/Errors/NotFound/NotFound";
import Signup from "./containers/Signup/Signup";
import Login from "./containers/Login/Login";
import NewService from "./containers/NewService/NewService";
import Services from "./containers/Service/Service";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/services/new">
        <NewService />
      </Route>
      <Route exact path="/services/:id">
        <Services /> 
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}