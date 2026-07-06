import { Link, useNavigate } from "react-router-dom";
import InputBox from "../../components/InputBox";
import "./EnterPassword.css";
import { enterPasswordSchema } from "../../validation/authValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { handleUpdatePassword } from "../../helpers/AuthenticationFunctions";

const EnterPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <title>Enter Password</title>
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
              <h3>Enter New Password</h3>
              <h5>
                Enter and confirm your new password to regain access to your
                account.
              </h5>
            </div>
            <Formik
              initialValues={{
                password: "",
              }}
              validationSchema={enterPasswordSchema}
              onSubmit={(values) => {
                handleUpdatePassword(values, navigate);
              }}
            >
              <Form className="middle-field-container">
                <label htmlFor="password">Password:</label>
                <div className="password-input">
                  <Field
                    className="middle-input-field"
                    type={showPassword === true ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                  />
                  {/*down -> Eye close */}
                  {showPassword === true ? (
                    <svg
                      onClick={() => setShowPassword(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => setShowPassword(true)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                  )}
                </div>
                <ErrorMessage
                  name="password"
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
};

export default EnterPassword;
