import * as Yup from "yup";

export const reviewValidation = Yup.object().shape({
  name: Yup.string()
    .max(15, "Your name is too long")
    .min(3)
    .required("Please Fill this form"),
  email: Yup.string().email().required("Please Fill this form"),
  review: Yup.string().required("Please Fill this form"),
  rating: Yup.number().min(1, "Please select a rating").max(5).required(),
});
