import { AuthToggleLinks } from "@/features/auth/form-toggle-links";
import type { FC } from "react";
import { Outlet } from "react-router";
//import styles from './AuthLayout.module.css'

export const AuthLayout: FC = () => {
  return (
    <div>
      <AuthToggleLinks />
      <Outlet />
    </div>
  );
};
