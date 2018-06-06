import React, { Component } from "react";
import Auth from "../services/Auth";
import { withRouter, Redirect } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Col,
  Row
} from "reactstrap";

// const LoginToMyApp = values => {
//   console.log(values);
//   return Promise.resolve("success");
// };

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.from = this.props.location.state
      ? this.props.location.state.from
      : { from: { pathname: "/" } };
    this.state = {
      redirectToReferrer: false
    };
  }

  login = () => {
    Auth.authenticate().then(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  renderForm() {
    return (
      <Row className="justify-content-center mt-1">
        <Col md="6">
          <p>You must log in to view the page at {this.from.pathname}</p>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                valid
              />
              <FormFeedback valid>
                You will not be able to see this
              </FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <Button onClick={this.login}>Submit</Button>
          </Form>
        </Col>
      </Row>
    );
  }
  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={this.from} />;
    }

    return Auth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            Auth.signout().then(() => this.props.history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      this.renderForm()
    );
  }
}
export default withRouter(AuthForm);
