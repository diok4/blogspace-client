import { object, string } from "yup";

export const postSchema = object({
  text: string().required("Text is required"),
});
