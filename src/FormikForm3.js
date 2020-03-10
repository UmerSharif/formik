import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function FormikForm3() {
  return (
    <div>
      <h1>Signup Form</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div>
              <Field name="firstName" placeholder="First Name"></Field>
              {errors.firstName && touched.firstName ? (
                <div className="errors">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="errors">
              <Field name="lastName" placeholder="Last Name"></Field>
            </div>
            <div className="errors">
              <Field name="email" type="email" placeholder="Email"></Field>
              {errors.email && touched.email ? (
                <div className="errors">{errors.email}</div>
              ) : null}
            </div>
            <div className="errors">
              <Field
                name="password"
                type="password"
                placeholder="Password"
              ></Field>
              {errors.password && touched.password ? (
                <div className="errors">{errors.password}</div>
              ) : null}
            </div>
            <div className="errors">
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              ></Field>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="errors">{errors.confirmPassword}</div>
              ) : null}
            </div>
            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short")
    .max(50, "Too Long")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("required"),
  password: Yup.string()
    .min(4, "minimu 4 char")
    .max(50, "too long")
    .required("required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Not match")
    .required("required")
});
