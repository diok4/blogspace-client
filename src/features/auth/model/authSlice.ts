import { createSlice } from "@reduxjs/toolkit";
import type { IAuthSlice } from "./types";

const initialState: IAuthSlice = {
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { loggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
