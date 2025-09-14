import { authSlice } from "@/features/auth/model/authSlice";
import { authApi } from "@/features/auth/api/authApi";
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/entities/user/api/userApi";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
