import type { FC } from "react";
import { useGetPostsQuery } from "../api/postApi";
import styles from "./post.module.css";
import type { IPost } from "@/features/post/model/types";
import { format } from "date-fns";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import { PostSettingsMenu } from "@/shared/ui/post-settings-ellipsis";

export const GetPosts: FC = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;
  if (!posts || posts.length === 0) return <p>No posts found</p>;

  return (
    <>
      {posts.map((post: IPost) => (
        <div className={styles.post} key={post._id}>
          <div className={styles.header}>
            <div className={styles.author}>
              <span>
                <p className={styles.avatar}>AD</p>
              </span>
              <span>
                <p className={styles.username}>{post.author.username}</p>
                <p className={styles.date}>
                  {format(new Date(post.createdAt), "d.MM.yyyy, HH:mm")}
                </p>
              </span>
            </div>
            <div className={styles.ellipsis}>
              <PostSettingsMenu
                items={[
                  { value: "edit", label: "Edit", to: "profile" },
                  { value: "delete", label: "Delete", to: "" },
                ]}
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.image}>
              <img
                src="https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-river-magic-nature-ultra-hd-wallpaper-4k-sr10012417-1705234940826-cover.webp"
                width={50}
                height={50}
                alt="404"
              />
            </div>
            <div className={styles.text}>
              <p>{post.text}</p>
            </div>
          </div>
          <hr />
          <div className={styles.footer}>
            <div className={styles.actions}>
              <div className={styles.likes}>
                <FaRegHeart /> 212
              </div>
              <div className={styles.comments}>
                <FaRegComment /> 12
              </div>
              <div className={styles.shared}>
                <MdIosShare />
              </div>
            </div>
            <div className={styles.bookmark}>
              <FaRegBookmark />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
