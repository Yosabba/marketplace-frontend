import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const userSlice = createSlice({
  name: "userLoggedIn",
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.value = false;
    },
    logUserIn: (state) => {
      state.value = true;
    },
  },
});

export const { logUserOut, logUserIn } = userSlice.actions;

export default userSlice.reducer;
