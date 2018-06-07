import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./hocs/PrivateRoute";
import Auth from "./services/Auth";

import MainLayout from "./layouts/Main";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import SearchPage from "./pages/Search";

const Routes = () => (
  <Router>
    <MainLayout>
      <Route
        exact
        path="/"
        component={
          Auth.isAuthenticated()
            ? () => <Redirect to={{ pathname: "/search" }} />
            : SignUpPage
        }
      />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/search" component={SearchPage} />
    </MainLayout>
  </Router>
);

export default Routes;
