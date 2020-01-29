import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
export default function FormikForm2() {
  return (
    <div>
      <h1>Sign Up Form</h1>
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
            <div className="errors">
              <Field name="firstName" placeholder="First Name" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </div>
            <div className="errors">
              <Field name="lastName" placeholder="Last Name" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </div>
            <div className="errors">
              <Field name="email" type="email" placeholder="Email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="errors">
              <Field name="password" type="password" placeholder="password" />

              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <div className="errors">
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
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
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Required"),
  password: Yup.string()
    .min(4, "Min 4 char")
    .max(50, "Too long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must be the same!")
    .required("confirm password required")
});
