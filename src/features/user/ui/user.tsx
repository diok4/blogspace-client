import React from "react";
import { useGetMeQuery } from "../api/userApi";

export const UserProfile: React.FC = () => {
  const { data, isLoading, error } = useGetMeQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка при загрузке</p>;
  if (!data) return <p>Нет данных</p>;

  return (
    <div>
      <p>
        <strong>Username:</strong> {data.userData.username}
      </p>
      <p>
        <strong>Email:</strong> {data.userData.email}
      </p>
    </div>
  );
};
