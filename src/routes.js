import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainLayout from "./layouts/Main";
import LoginPage from "./pages/Login";
import Auth from "./services/Auth";
import SignUpPage from "./pages/SignUp";
import SearchPage from "./pages/Search";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

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
