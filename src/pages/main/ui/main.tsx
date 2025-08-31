import type { FC } from "react";
// import styles from "./main.module.css";
import { Link } from "react-router";
export const MainPage: FC = () => {
  return (
    <div>
      <button>
        <Link to="auth/register">Register</Link>
      </button>
    </div>
  );
};
