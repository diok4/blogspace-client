import type { FC } from "react";
// import styles from "./main.module.css";
<<<<<<< HEAD
import { Link } from "react-router";
export const MainPage: FC = () => {
  return (
    <div>
      <button>
        <Link to="auth/register">Register</Link>
      </button>
    </div>
  );
=======
import { RegisterPage } from "@/pages/auth/register";
import { LoginPage } from "@/pages/auth/login";

export const MainPage: FC = () => {
  return <div></div>;
>>>>>>> master
};
