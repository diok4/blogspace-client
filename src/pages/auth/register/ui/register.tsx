import { useState, type FC } from "react";
import styles from "./register.module.css";
import { Input } from "@/shared/ui/input";


export const RegisterPage: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>DevNote AI </p>
      </div>
      <div className={styles.subTitle}>
        <p>Create a new account</p>
      </div>
      <div className={styles.form}>
        <div className={styles.name}>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstname"
            placeholder="First Name"
          />
          <Input
            type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            name="secondname"
            placeholder="Second Name"
          />
        </div>
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
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmpassword"
            placeholder="Confirm Password"
          />
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
    </div>
  );
};
