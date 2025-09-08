import styles from "./register.module.css";
import { Input } from "@/shared/ui/input";
import { useState, type FC } from "react";
import { authSchema } from "@/shared/lib/validation";

export const RegisterForm: FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authSchema.validate(formData);
    setErrors({});
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.title}>
        <p>DevNote AI </p>
      </div>
      <div className={styles.subTitle}>
        <p>Create a new account</p>
      </div>
      <div className={styles.form}>
        <div className={styles.username}>
          <Input
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
            placeholder="Username"
          />
          <p>{errors.username}</p>
        </div>
        <div className={styles.email}>
          <Input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <p>{errors.email}</p>
        </div>
        <div className={styles.password}>
          <Input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
          <p>{errors.password}</p>
          <Input
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmpassword"
            placeholder="Confirm Password"
          />
          <p>{errors.confirmPassword}</p>
        </div>
        <div className={styles.button}>
          <button>Create Account</button>
        </div>
        <div className={styles.agreement}>
          <p>
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </form>
  );
};
