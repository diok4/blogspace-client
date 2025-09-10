import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
  id: string;
  username: string;
  email: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/auth/",
    credentials: "include",
  }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
    }),
    me: build.mutation<IUser, void>({
      query: (body) => ({
        url: "is-auth",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useMeMutation,
} = authApi;
