import { useState, type FC } from "react";
import styles from "./register.module.css";
import { Input } from "@/shared/ui/input";

export const RegisterPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.authContainer}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        placeholder="email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        placeholder="password"
      />
    </div>
  );
};
