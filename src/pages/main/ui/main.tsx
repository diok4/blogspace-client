import { GetMe } from "@/features/auth/ui/is-auth";
import { UserProfile } from "@/features/user/ui/user";
import type { FC } from "react";
// import styles from "./main.module.css";

export const MainPage: FC = () => {
  return (
    <div>
      <GetMe />
      <UserProfile />
    </div>
  );
};
