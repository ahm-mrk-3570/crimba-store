import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "The firstname is too long")
    .min(3, "The firstname is short")
    .required("Please Fill this Field.."),
  lastName: Yup.string()
    .max(15, "The lastname is too long")
    .min(3, "The lastname is short")
    .required("Please Fill this Field.."),
  phoneNumber: Yup.string()
    .required("Please Fill this Field..")
    .matches(/^\+[1-9]\d{7,14}$/, "Phone number is not valid"),
  email: Yup.string()
    .email("Email is incorrect")
    .required("Please Fill this Field.."),
  password: Yup.string()
    .min(8, "Password is short")
    .required("Please Fill this Field.."),
  avatar: Yup.mixed()
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return false;

      return value.size <= 2 * 1024 * 1024;
    })
    .test("fileType", "Only images are allowed", (value) => {
      if (!value) return false;

      return ["image/jpeg", "image/png", "image/webp"].includes(value.type);
    }),
  rules: Yup.boolean().oneOf([true], "Please accept the Terms and Conditions"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is incorrect")
    .required("Please Fill this Field.."),
  password: Yup.string()
    .min(8, "Password is short")
    .required("Please Fill this Field.."),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is incorrect")
    .required("Please Fill this Field.."),
});

export const enterPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password is short")
    .required("Please Fill this Field.."),
});
