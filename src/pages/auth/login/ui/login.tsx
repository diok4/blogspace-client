import { LoginForm } from "@/features/auth";
import { type FC } from "react";
import styles from "./login.module.css";

export const LoginPage: FC = () => {
  return (
    <>
      <div className={styles.title}>
        <p>Come Back to DevNote AI</p>
      </div>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </>
  );
};
