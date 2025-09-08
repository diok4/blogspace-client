import type { FC } from "react";
import { NavLink } from "react-router";
//import styles from './AuthToggleLinks.module.css'

export const AuthToggleLinks: FC = () => {
  return (
    <div>
      {/* <div className={styles.changeForm}> */}
      <NavLink
        to="/auth/login"
        style={({ isActive }) => {
          return { color: isActive ? "green" : "red" };
        }}
      >
        Sign In
      </NavLink>

      <NavLink
        to="/auth/register"
        style={({ isActive }) => {
          return { color: isActive ? "green" : "red" };
        }}
      >
        Sign Up
      </NavLink>
    </div>
  );
};
