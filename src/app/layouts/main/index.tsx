import { NavBar } from "@/widgets/navbar/ui/navbar";
import type { FC } from "react";
import { Outlet } from "react-router";
import styles from "./index.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainLayout: FC = () => {
  return (
    <>
      <div className={styles.navbar}>
        <span>
          <NavBar />
        </span>
      </div>

      <div className={styles.main}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Outlet />
      </div>
    </>
  );
};
