import type { FC } from "react";
import { Outlet } from "react-router";
import styles from "./index.module.css";
import { NavLink } from "react-router";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const AuthLayout: FC = () => {
  return (
    <>
      <div className={styles.back}>
        <FaLongArrowAltLeft />
        <NavLink to="/">Home</NavLink>
      </div>

      <Outlet />
    </>
  );
};
