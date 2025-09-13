import { NavBar } from "@/widgets/navbar/ui/navbar";
import type { FC } from "react";
import { Outlet } from "react-router";
import styles from "./index.module.css";

export const MainLayout: FC = () => {
  return (
    <>
      <div className={styles.navbar}>
        <span>
          <NavBar />
        </span>
      </div>

      <div className={styles.main}>
        <Outlet />
      </div>
    </>
  );
};
