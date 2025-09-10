import styles from "./auth.module.css";
import { Input } from "@/shared/ui/input";
import { useState, type FC } from "react";
import { loginSchema } from "@/shared/lib/validation";
import { useLoginMutation } from "../api/authApi";
import { useNavigate } from "react-router";

export const LoginForm: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [login, { data, isSuccess }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await loginSchema.validate(formData);
      setErrors({});

      const result = await login(formData).unwrap();
      navigate("/");
      console.log("Success", result);
    } catch (err: any) {
      console.error("Error", err);
      setErrors(err.message);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {isSuccess && <p style={{ color: "green" }}>✅ Успешный вход!</p>}
      <div className={styles.title}>
        <p>DevNote AI </p>
      </div>
      <div className={styles.subTitle}>
        <p>Create a new account</p>
      </div>
      <div className={styles.form}>
        <div className={styles.email}>
          <Input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          {/* <p>{errors.email}</p> */}
        </div>
        <div className={styles.password}>
          <Input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
          {/* <p>{errors.password}</p> */}
        </div>
        <div className={styles.button}>
          <button>Sign In</button>
          {/* {errors && <p style={{ color: "red" }}>{errors.message}</p>} */}
        </div>
      </div>
    </form>
  );
};
