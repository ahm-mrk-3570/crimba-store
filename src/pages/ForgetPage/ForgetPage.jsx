import { Link } from "react-router-dom";
import InputBox from "../../components/InputBox";
import "./ForegetPage.css";
import { forgetPasswordSchema } from "../../validation/authValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { handleSendForgetPassword } from "../../helpers/AuthenticationFunctions";

export default function ForgetPage() {

  return (
    <>
      <title>Forget Password</title>
      <div className="forget-body">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="fields">
            <Link to="/login" className="back-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
              <span>Back</span>
            </Link>
            <div className="top-fields-container">
              <h3>Forget Password</h3>
              <h5>
                Enter your registered email address. we’ll send you a code to
                reset your password.
              </h5>
            </div>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={forgetPasswordSchema}
              onSubmit={(values) => {
                handleSendForgetPassword(values)
              }}
            >
              <Form className="middle-field-container">
                <label htmlFor="email">Email:</label>
                <Field
                  className="middle-input-field"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                />
                <ErrorMessage
                  name="email"
                  render={(res) => <div style={{ color: "red" }}>{res}</div>}
                />
                <input
                  className="btn-login"
                  value="Send forget password link"
                  type="submit"
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
