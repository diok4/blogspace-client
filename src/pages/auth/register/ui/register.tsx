import { RegisterForm } from "@/features/auth";
import { type FC } from "react";
import styles from "./register.module.css";

export const RegisterPage: FC = () => {
  return (
    <>
      {/* <div className={styles.title}>
        <p>Welcome to DevNote AI</p>
      </div> */}
      <div className={styles.container}>
        <RegisterForm />
      </div>
    </>
  );
};
