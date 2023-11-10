// Importing necessary React components and libraries for the login form.
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Importing Yup for form validation schema creation.
import LoginError from "./LoginError";
import { Button } from "react-bootstrap";
import { AuthContext, actionTypes } from "./store/AuthContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  // Initial form field values
  const initialValues = {
    username: "",
    password: "",
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters") // To enforce minimum password length
      .required("Password is required"), // To ensure password is not empty
  });

  // Function to handle form submission
  const onSubmit = (values) => {
    // To dispatch a LOGIN action with the entered username
    dispatch({ type: actionTypes.LOGIN, payload: values.username });
  };

  return (
    <div className="page-content">
      <h1 className="ms-3" style={{ color: "lightgrey" }}>
        Login
      </h1>
      <div className="text-center">
        {/* Formik wrapper for form handling */}
        <Formik
          initialValues={initialValues} //To set the initial form field values
          validationSchema={validationSchema} // To define the validation schema for form fields
          onSubmit={onSubmit} // To define the submission handler for the form
        >
          <Form>
            <div>
              {/* username Field */}
              <div className="username-label" style={{ marginRight: "9.2rem" }}>
                <label>Username:</label>
              </div>

              <Field type="text" name="username" placeholder="Enter username" />
              <ErrorMessage name="username" component={LoginError} />
            </div>
            <div style={{ marginTop: "10px" }}>
              {/* Password Field */}
              <div className="email-label" style={{ marginRight: "7.4rem" }}>
                <label>Password:</label>
              </div>

              <Field
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component={LoginError} />
            </div>
            {/* Submit Button */}
            <Button type="submit" style={{ marginTop: "10px" }}>
              Login
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
