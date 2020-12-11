import React from "react";
import { Switch, Route } from "react-router";
import Home from "./container/Home";
import Login from "./container/Login";
import Business from "./container/Business";
import AddBusiness from "./container/AddBusiness";
import SignUp from "./container/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddBusiness} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/business/:id" component={Business} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default Router;
