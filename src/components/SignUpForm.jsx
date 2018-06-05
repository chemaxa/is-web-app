import React, { Component } from "react";
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

export default class SignUpForm extends Component {
  render() {
    return (
      <Row className="justify-content-center mt-1">
        <Col md="6">
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
            <FormGroup>
              <Label for="password-confirmation">Confirm Password </Label>
              <Input
                type="password"
                name="password-confirmation"
                id="password-confirmation"
                placeholder="Repeat your password"
                invalid
              />
              <FormFeedback >
                You will not be able to see this
              </FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
