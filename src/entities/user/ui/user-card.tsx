import React from "react";
import { useGetMeQuery } from "../api/userApi";
import styles from "./user-card.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router";
export const UserCard: React.FC = () => {
  const { data, isLoading, error } = useGetMeQuery();
  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка при загрузке</p>;
  if (!data) return <p>Нет данных</p>;
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.header}>
        {" "}
        <div className={styles.left}>
          {" "}
          <p>AJ</p>{" "}
        </div>{" "}
        <div className={styles.center}>
          {" "}
          <div className={styles.username}>{data.userData.username}</div>{" "}
          <div className={styles.username}>@{data.userData.username}</div>{" "}
          <div className={styles.gray}>
            {" "}
            <div className={styles.nickname}>@alexjonson</div>{" "}
            <div className={styles.email}>{data.userData.email}</div>{" "}
            <div className={styles.metadata}>
              {" "}
              <span>
                {" "}
                <CiLocationOn /> Tashkent, Uzbekistan{" "}
              </span>{" "}
              <span>
                {" "}
                <FaCalendarAlt /> from september 2025{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div className={styles.bio}>
            {" "}
            <p>
              {" "}
              Creative blogger and writer. I write about life, travel, art, and
              self-development. I believe in the power of stories that can
              change the world for the better. I love sharing inspiration and
              discoveries.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className={styles.right}>
          {" "}
          <div className={styles.buttons}>
            {" "}
            <NavLink to="/generation">Create Post</NavLink> <p>Edit profile</p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <hr />{" "}
      <div className={styles.footer}>
        {" "}
        <div>
          {" "}
          <h3>3</h3> <p>posts</p>{" "}
        </div>{" "}
        <div>
          {" "}
          <h3>4323</h3> <p>subscribers</p>{" "}
        </div>{" "}
        <div>
          {" "}
          <h3>432</h3> <p>subscribes</p>{" "}
        </div>{" "}
        <div>
          {" "}
          <h3>4235</h3> <p>likes</p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
