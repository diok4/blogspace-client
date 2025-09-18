import styles from "./auth.module.css";
import { Input } from "@/shared/ui/input";
import { useState, type FC } from "react";
import { loginSchema } from "@/shared/lib/validation";
import { useLoginMutation } from "../api/authApi";
import { useNavigate } from "react-router";
import { AuthToggleLinks } from "@/shared/ui/auth-toggle";
import { toast } from "react-toastify";

export const LoginForm: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [login] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await loginSchema.validate(formData, { abortEarly: false });

      const result = await login(formData).unwrap();
      toast.success("Login successful!");
      navigate("/profile");
      console.log("Success", result, formData);
      console.log(setErrors);
    } catch (err: any) {
      console.error("Error", err);

      if (err.name === "ValidationError") {
        toast.error(err.errors.join(", "));
      } else {
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {/* {isSuccess && <p style={{ color: "green" }}>Успешный вход!</p>} */}
      <div className={styles.toggle}>
        <AuthToggleLinks />
      </div>
      <div className={styles.texts}>
        <p className={styles.title}>Welcome Back</p>
        <p className={styles.subTitle}>
          Enter your details to access your account
        </p>
      </div>
      <div className={styles.form}>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Enter your email"
          />
          {/* <p>{errors.email}</p> */}
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Enter your password"
          />
          <p>{errors.password}</p>
        </div>
        <div className={styles.button}>
          <button>Login</button>
          {/* {errors && <p style={{ color: "red" }}>{errors.message}</p>} */}
        </div>

        <div className={styles.agreement}>
          <p>
            By signing up, you agree to our Terms of Service and
            <span> Privacy Policy</span>
          </p>
        </div>
      </div>
    </form>
  );
};
