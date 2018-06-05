import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Login from "./pages/Login";
import fakeAuth from "./services/Auth";
import AuthButton from "./components/AuthButton";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
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
      <AuthButton />
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </MainLayout>
  </Router>
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

export default Routes;
