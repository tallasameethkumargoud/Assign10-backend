import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: localStorage.getItem("authToken") || null,
  userType: localStorage.getItem("type") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authToken = action.payload.authToken;
      state.userType = action.payload.userType;
      localStorage.setItem("authToken", action.payload.authToken);
      localStorage.setItem("type", action.payload.userType);
    },
    logout: (state) => {
      state.authToken = null;
      state.userType = null;
      localStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
