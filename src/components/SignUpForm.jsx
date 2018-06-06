import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Col,
  Row
} from "reactstrap";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { signUp as signUpMessages } from "../messages.json";
import { withFormik } from "formik";
import fakeAuth from "../services/Auth";

const LoginToMyApp = values => {
  console.log(values);
  return Promise.resolve("success");
};

const transformMyApiErrors = errors => {
  console.error(errors);
  return Promise.resolve("errors");
};

const SignUpForm = ({
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
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              {...(touched.email && errors.email
                ? { valid: false, invalid: true }
                : {})}
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
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
              value={values.password}
              onChange={handleChange}
            />
            {touched.password &&
              errors.password && <FormFeedback>{errors.password}</FormFeedback>}
          </FormGroup>
          <FormGroup>
            <Label for="password-confirmation">Confirm Password </Label>
            <Input
              type="password"
              name="passwordСonfirmation"
              id="password-confirmation"
              placeholder="Repeat your password"
              {...(touched.password && errors.password
                ? { valid: false, invalid: true }
                : {})}
              value={values.passwordСonfirmation}
              onChange={handleChange}
            />
            {touched.passwordСonfirmation &&
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

export default withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    email: "",
    password: "",
    passwordСonfirmation: ""
  }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = signUpMessages.email.empty;
    } else if (!isEmail(values.email)) {
      errors.email = signUpMessages.email.format;
    } else if (
      (!values.password && !values.passwordСonfirmation) ||
      !equals(values.password, values.passwordСonfirmation)
    ) {
      errors.password = signUpMessages.password;
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */
    }
  ) => {
    LoginToMyApp(values).then(
      user => {
        setSubmitting(false);
        // do whatevs...
        // props.updateUser(user)
      },
      errors => {
        setSubmitting(false);
        // Maybe even transform your API's errors into the same shape as Formik's!
        setErrors(transformMyApiErrors(errors));
      }
    );
  }
})(SignUpForm);
