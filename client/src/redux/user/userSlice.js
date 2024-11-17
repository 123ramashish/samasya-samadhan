import { createSlice } from "@reduxjs/toolkit";

// Retrieve user from localStorage, if exists
const storedUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const storedOldUser = localStorage.getItem("oldUser")
  ? JSON.parse(localStorage.getItem("oldUser"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: storedUser,
    oldUser: storedOldUser,
    error: null,
    loading: false,
  },
  reducers: {
    signUpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.oldUser = action.payload;
      localStorage.setItem("oldUser", JSON.stringify(action.payload));
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;

      // Store user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;

      // Remove user from localStorage on sign out
      localStorage.removeItem("currentUser");
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signInStart,
  signInSuccess,
  signInFailure,
  signoutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
