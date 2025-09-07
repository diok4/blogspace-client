import { object, string, ref } from "yup";

export const authSchema = object({
  username: string()
    .min(5, "Username must be at least 5 characters")
    .required("Username is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password")], "Password must match")
    .required("Confirm password"),
});
