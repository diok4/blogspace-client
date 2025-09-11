import styles from "./auth.module.css";
import { Input } from "@/shared/ui/input";
import { useState, type FC } from "react";
import { registerSchema } from "@/shared/lib/validation";
import { useRegisterMutation } from "../api/authApi";
import { AuthToggleLinks } from "@/shared/ui/auth-toggle";

export const RegisterForm: FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [register, { data }] = useRegisterMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await registerSchema.validate(formData);
      setErrors({});

      await register(formData).unwrap();
    } catch (err: any) {
      setErrors(err.message);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.toggle}>
        <AuthToggleLinks />
      </div>
      <div className={styles.texts}>
        <p className={styles.title}>Join Us</p>
        <p className={styles.subTitle}>
          Enter your details to create your account
        </p>
      </div>
      <div className={styles.form}>
        <div className={styles.username}>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
            placeholder="Enter your username"
          />
          {/* <p>{errors.username}</p> */}
        </div>
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
          {/* <p>{errors.password}</p> */}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          {/* <p>{errors.confirmPassword}</p> */}
        </div>
        <div className={styles.button}>
          <button>Create Account</button>
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
