import type { FC } from "react";
import styles from "./profile.module.css";
import { UserCard } from "@/entities/user/ui/user-card";

export const ProfilePage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <UserCard />
      </div>
      <div className={styles.posts}></div>
    </div>
  );
};
