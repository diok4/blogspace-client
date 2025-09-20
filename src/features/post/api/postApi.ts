import type { IPost } from "./../model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-mern-auth.vercel.app/api/posts",
    credentials: "include",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    createPost: build.mutation<IPost, Partial<IPost>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreatePostMutation } = postApi;
