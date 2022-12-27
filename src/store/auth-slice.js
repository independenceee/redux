import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: function(state, action) {
        state.isLoggedIn = true;
    },

    logout: function(state, action) {
        state.isLoggedIn = false;
    }
  },
});

export const authAction = authSlice.actions;
export default authSlice;
