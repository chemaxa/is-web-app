import React from "react";
import Auth from "../services/Auth";
import { withRouter } from "react-router-dom";
import { withFormik } from "formik";
import { login as loginMessages } from "../resource/messages.json";
import isEmail from "validator/lib/isEmail";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Col,
  Row,
  UncontrolledAlert
} from "reactstrap";

const AuthForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <Row className="justify-content-center mt-1">
      <Col md="6">
        <Form onSubmit={handleSubmit} noValidate>
          {errors.authFailure && (
            <UncontrolledAlert color="info">
              {errors.authFailure}
            </UncontrolledAlert>
          )}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              {...(touched.email && errors.email
                ? { valid: false, invalid: true }
                : {})}
              onChange={handleChange}
              value={values.email}
            />
            {touched.email &&
              errors.email && <FormFeedback>{errors.email}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              id="password"
              {...(touched.password && errors.password
                ? { valid: false, invalid: true }
                : {})}
              onChange={handleChange}
              value={values.password}
            />
            {touched.password &&
              errors.password && <FormFeedback>{errors.password}</FormFeedback>}
          </FormGroup>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
const formOptions = {
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: "", password: "" }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = loginMessages.email.empty;
    } else if (!isEmail(values.email)) {
      errors.email = loginMessages.email.format;
    } else if (!values.password) {
      errors.password = loginMessages.password;
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (values, { props: { history }, setSubmitting, setErrors }) => {
    Auth.authenticate(values).then(
      user => {
        history.push(process.env.PUBLIC_URL + "/search");
      },
      errors => {
        setErrors({
          authFailure: loginMessages.authFailure
        });
      }
    );
  }
};

export default withRouter(withFormik(formOptions)(AuthForm));
