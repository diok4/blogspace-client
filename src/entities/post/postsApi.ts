import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Data"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-mern-auth.vercel.app/api/posts",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getPosts: build.query<any, void>({
      query: () => "/",
      providesTags: ["Data"],
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
