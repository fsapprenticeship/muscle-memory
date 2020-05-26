import React from 'react';
import { Route, Swich } from 'react-router-dom';
import AppliedRoute from './coponents/AppliedRoute';
import Hoome from './home/Home';
import Overview from './profile/Dashboard';
import UserReport from './reports/Transactions';
import NotFound from "./components/NotFound";

export default ({ childProps }) => (
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/overview" exact component={Overview} props={childProps}/>
        <Route path="/user-reports" exact component={UserReport} />
        <Route component={NotFound} />   
        </Switch>
);