import { useState, type FC } from "react";
import styles from "./login.module.css";
import { Input } from "@/shared/ui/input";
import { Link } from "react-router";

export const LoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>DevNote AI </p>
      </div>
      <div className={styles.subTitle}>
        <p>Sign in to your account</p>
      </div>
<<<<<<< HEAD
=======
      <div className={styles.changeForm}>
        <Link to="/auth/login">Sign In</Link>
        <Link to="/auth/register">Sign Up</Link>
      </div>
>>>>>>> master
      <div className={styles.form}>
        <div className={styles.email}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
          />
        </div>
        <div className={styles.password}>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
          />
        </div>
        <div className={styles.button}>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};
