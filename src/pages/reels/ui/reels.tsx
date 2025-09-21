import { GetPosts } from "@/entities/post";
import type { FC } from "react";
import styles from "./reels.module.css";

export const ReelsPage: FC = () => {
  return (
    <div className={styles.container}>
      <GetPosts />
    </div>
  );
};
