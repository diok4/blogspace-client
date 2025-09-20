import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Data"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-mern-auth.vercel.app/api/user/",
    credentials: "include",
  }),
  endpoints: (build) => ({
    getMe: build.query<any, void>({
      query: () => "data",
      providesTags: ["Data"],
    }),
  }),
});

export const { useGetMeQuery } = userApi;
