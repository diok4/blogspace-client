import type { FC } from "react";
import { useGetPostsQuery } from "./postsApi";
import type { IPost } from "@/features/post/model/types";

export const GetPosts: FC = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery(undefined);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;
  if (!posts || posts.length === 0) return <p>No posts found</p>;

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // месяцы с 0
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {posts.map((post: IPost) => (
        <div
          key={post._id}
          style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}
        >
          <h3>Пользователь: {post.author.username}</h3>
          <p>Текст:{post.text}</p>
          <p>Создано: {formatDate(post.createdAt)}</p>
        </div>
      ))}
    </div>
  );
};
