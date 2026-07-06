import * as Yup from "yup";

export const updateProfileValidationSchema = Yup.object().shape({
  first_name: Yup.string()
    .max(15, "The firstname is too long")
    .min(3, "The firstname is short")
    .required("Please Fill this Field.."),
  last_name: Yup.string()
    .max(15, "The lastname is too long")
    .min(3, "The lastname is short")
    .required("Please Fill this Field.."),
  phone_number: Yup.string()
    .required("Please Fill this Field..")
    .matches(/^\+[1-9]\d{7,14}$/, "Phone number is not valid"),
  email: Yup.string()
    .email("Email is incorrect")
    .required("Please Fill this Field.."),
});
