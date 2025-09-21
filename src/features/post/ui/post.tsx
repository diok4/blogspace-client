import styles from "./post.module.css";
import { Input } from "@/shared/ui/input";
import { useState, type FC } from "react";
import { postSchema } from "@/shared/lib/validation";
import { useCreatePostMutation } from "../api/postApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const CreatePost: FC = () => {
  const [post, setPost] = useState({
    text: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [createPost, { data }] = useCreatePostMutation();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postSchema.validate(post, { abortEarly: false });
      setErrors({});

      await createPost(post).unwrap();
      toast.success("Post created successfully!");
      navigate("/reels");
    } catch (err: any) {
      if (err.name === "ValidationError") {
        const fieldErrors: Record<string, string> = {};
        err.inner.forEach((validationError: any) => {
          if (validationError.path) {
            fieldErrors[validationError.path] = validationError.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please fix validation errors");
        console.log(errors, data);
      } else {
        toast.error("Server error. Try again!");
      }
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={post.text}
        onChange={handleChange}
        name="text"
        placeholder="text"
      />
      <button>create post </button>
    </form>
  );
};
