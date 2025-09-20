import type { IUser } from "@/features/auth/model/types";

export interface IPost {
  author: IUser;
  _id: string;
  photo: string;
  text: string;
  likes: string[];
  shares: number;
  comments: string;
  createdAt: string;
}
