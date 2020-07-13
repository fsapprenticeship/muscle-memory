import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./home/Home";
import Overview from "./profile/Dashboard";
import UseReport from "./reports/Transactions";
import NotFound from "./components/NotFound";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute
      path="/overview"
      exact
      component={Overview}
      props={childProps}
    />
    <Route path="/user-reports" exact component={UserReport} />
    <Route component={NotFOund} />
  </Switch>
);
