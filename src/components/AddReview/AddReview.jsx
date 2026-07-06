import { ErrorMessage, Field, Form, Formik } from "formik";

import { reviewValidation } from "../../validation/reviewValidation";

import useProfile from "../../hooks/useProfile";

import "./AddReview.css";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import GlobalContext from "../../context/Context";
import AuthContext from "../../context/AuthContext";
import { CreateOrder } from "../../services/orderServices";
import { createReview } from "../../services/reviewServices";
import { handleCommitReview } from "../../helpers/reviewFunctions";

export default function AddReview({ product }) {
  const [ratingStar, setRatingStar] = useState(null);
  const { user } = useContext(AuthContext);
  const { setReviews } = useContext(GlobalContext);

  const { profile } = useProfile(user);

  return (
    <div className="main-add-review-container">
      <h4>Add your Review</h4>
      <Formik
        initialValues={{
          name: "",
          email: "",
          review: "",
          rating: 0,
        }}
        validationSchema={reviewValidation}
        onSubmit={(values, { resetForm }) => {
          handleCommitReview(
            values,
            resetForm,
            user,
            product,
            profile,
            setReviews,
            setRatingStar,
          );
        }}
      >
        {({ setFieldValue, errors }) => {
          return (
            <Form className="review-detail">
              <div className="rating-container">
                <h5>Your Rating</h5>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star, i) => {
                    return (
                      <img
                        key={i}
                        onClick={() => {
                          setFieldValue("rating", star);
                          setRatingStar(star);
                        }}
                        src={`main-images/stars/${star * 10}-${ratingStar === star ? "fill" : "stroke"}.svg`}
                        height={24}
                        alt="star-stroke"
                      />
                    );
                  })}
                </div>
                <p style={{ color: "red" }}>{errors.rating && errors.rating}</p>
              </div>
              <p style={{ color: "var(--error)" }}>
                {errors.avatar && errors.avatar}
              </p>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
              />
              <ErrorMessage
                name="name"
                render={(res) => <p style={{ color: "var(--error)" }}>{res}</p>}
              />
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <ErrorMessage
                name="email"
                render={(res) => <p style={{ color: "var(--error)" }}>{res}</p>}
              />
              <label htmlFor="review">Your Review</label>
              <Field
                as="textarea"
                type="text"
                id="review"
                name="review"
                placeholder="Enter Your Review"
              />
              <div className="submit-review">
                <input
                  id="submit-review"
                  type="submit"
                  className="btn-submit-review"
                  value="Submit"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
