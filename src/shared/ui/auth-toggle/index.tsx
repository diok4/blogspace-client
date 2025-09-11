import type { FC } from "react";
import { NavLink } from "react-router";
import styles from "./index.module.css";

export const AuthToggleLinks: FC = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.changeForm}> */}
      <NavLink
        to="/auth/login"
        className={({ isActive }) => {
          return isActive ? styles.isActive : undefined;
        }}
      >
        Sign In
      </NavLink>

      <NavLink
        to="/auth/register"
        className={({ isActive }) => {
          return isActive ? styles.isActive : undefined;
        }}
      >
        Sign Up
      </NavLink>
    </div>
  );
};
