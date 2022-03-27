import { createSlice } from "@reduxjs/toolkit";

const getInitialAuthState = () => ({ isAuthenticated: false });

const authSlice = createSlice({
  name: "authentication",
  initialState: getInitialAuthState(),
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});


export default authSlice;