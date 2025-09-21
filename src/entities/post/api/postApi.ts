import type { IPost } from "@/features/post/model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-mern-auth.vercel.app/api/posts",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], void>({
      query: () => "/",
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
