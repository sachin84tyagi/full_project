import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { LoginPage } from "./components/login/loginPage";

import { PrivateRoute } from "./containers/PrivateRoute";
import { PageNotFound } from "./shared/error/PageNotFound";

import Logout from "./components/logout/logoutPage";

import Dashboard from "./components/Dashboard/Dashboard";

import Header from "./shared/header/header";

import Footer from "./shared/footer/footer";

import NotificationData from "./components/notificationData/notificationData";
import NotificationDetails from "./components/notificationDetails/notificationDetails";
import { Users } from "./components/users/users"

import Message from "./components/messages/messages";

const Router = props => (
  <React.Fragment>
    <Switch>
      <Route exact path="/backend" component={LoginPage} />
      <Route exact path="/backend/loginPage" component={LoginPage} />
      <Route exact path="/backend/notificationData" component={NotificationData} />
      <Route
        exact
        path="/backend/notificationDetails/:image/:timeStamp"
        component={NotificationDetails}
      />
      <Route exact path="/backend/message" component={Message} />

      <PrivateRoute exact path="/backend/logoutPage" component={Logout} />
      <PrivateRoute exact path="/backend/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/backend/users" component={Users} />
      <Route component={PageNotFound} />
    </Switch>
  </React.Fragment>
);

function mapStateToProps(state) {
  const { authentication } = state;
  return {
    authentication
  };
}
export default connect(mapStateToProps)(Router);
