import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(8, "Password must be 5 characters or more")
    .required("Password is required"),
});

export const registerSchema = Yup.object({
  name: Yup.string()
    .max(20, "Name must be 20 characters or less")
    .required("Please enter a valid name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  password: Yup.string()
    .min(8, "Password must be 5 characters or less")
    .required("Required"),
});
