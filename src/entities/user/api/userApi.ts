import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-mern-auth.vercel.app/api/user/",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getMe: build.query<any, void>({
      query: () => "data",
    }),
  }),
});

export const { useGetMeQuery } = userApi;
