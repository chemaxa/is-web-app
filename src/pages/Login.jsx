import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import fakeAuth from "../services/Auth";
import AuthForm from "../components/AuthForm";

export default class LoginPage extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <AuthForm />
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}
