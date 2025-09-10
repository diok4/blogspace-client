import { type FC, useEffect, useState } from "react";
import { useMeMutation } from "../api/authApi";

export const GetMe: FC = () => {
  const [me, { data: user, error, isLoading }] = useMeMutation();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    me();
    setFetched(true);
  }, [me]);

  if (!fetched || isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Не авторизован</p>;
  if (!user) return null;

  return (
    <div>
      <h2>Привет, {user.username}</h2>
      <p>userId: {user.userId}</p>
    </div>
  );
};
