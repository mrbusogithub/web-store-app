import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginError from "../LoginError"; // import to style the error messages
import { Button } from "react-bootstrap";

const Registration = () => {
  // Initial form field values
  const initialValues = {
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // To define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    // Validation for the First Name field
    firstName: Yup.string()
      .max(15, "First Name must not exceed 15 characters")
      .required("First Name is required"),
    // Validation for the Surname field
    surname: Yup.string()
      .max(20, "Surname must not exceed 20 characters")
      .required("Surname is required"),
    username: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),

    // Validation for the Email field
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "The password must contain 8 characters or more, at least one uppercase and lowercase letter, a number, and a special case character"
      )
      .required("Password is required"),
    // Validation for the Confirm Password field
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // To define the form submission logic
  const onSubmit = (values) => {
    // To handle registration logic here
    console.log("Registration data:", values);
  };

  return (
    <div className="page-content">
      {/* Registration page heading */}
      <h1 className="ms-3" style={{ color: "lightgrey" }}>
        Registration
      </h1>
      <div className="text-center mt-5">
        {/* Formik component for handling form state */}
        <Formik
          initialValues={initialValues} //To set the initial form field values
          validationSchema={validationSchema} // To define the validation schema for form fields
          onSubmit={onSubmit} // To define the submission handler for the form
        >
          <Form>
            {/* Form fields for user registration */}
            <div>
              <div>
                <label style={{ marginRight: "10.6rem" }} htmlFor="firstName">
                  First Name:
                </label>
              </div>

              <Field
                type="text"
                name="firstName"
                placeholder="Enter first name"
                style={{ width: "250px" }}
              />
              <ErrorMessage name="firstName" component={LoginError} />
            </div>

            {/* Surname field */}
            <div>
              <div className="mt-3">
                <label style={{ marginRight: "11.5rem" }} htmlFor="surname">
                  Surname:
                </label>
              </div>

              <Field
                type="text"
                name="surname"
                placeholder="Enter surname"
                style={{ width: "250px" }}
              />
              <ErrorMessage name="surname" component={LoginError} />
            </div>

            {/* Username field */}
            <div>
              <div className="mt-3">
                <label style={{ marginRight: "11.1rem" }} htmlFor="username">
                  Username
                </label>
              </div>

              <Field
                type="text"
                name="username"
                placeholder="Enter username"
                style={{ width: "250px" }}
              />
              <ErrorMessage name="username" component={LoginError} />
            </div>

            {/* Email field */}
            <div>
              <div className="mt-3">
                <label style={{ marginRight: "13.2rem" }} htmlFor="email">
                  Email
                </label>
              </div>

              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                style={{ width: "250px" }}
              />
              <ErrorMessage name="email" component={LoginError} />
            </div>

            {/* Password field */}
            <div>
              <div className="mt-3">
                <label style={{ marginRight: "11.4rem" }} htmlFor="password">
                  Password
                </label>
              </div>

              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                style={{ width: "250px" }}
              />
              <ErrorMessage name="password" component={LoginError} />
            </div>

            {/* Confirm Password field */}
            <div>
              <div className="mt-3">
                <label
                  style={{ marginRight: "7.6rem" }}
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
              </div>

              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                style={{ width: "250px" }}
              />
              <ErrorMessage name="confirmPassword" component={LoginError} />
            </div>

            {/* Register button */}
            <Button
              type="submit"
              style={{ marginTop: "20px" }}
              variant="success"
            >
              Register
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
