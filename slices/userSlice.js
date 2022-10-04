import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import userService from "./userService";
import axios from "axios";

const initialState = {
  user: "",
  isLoggedIn: false,
};

export const signUserIn = createAsyncThunk(
  "user/login",
  async (user, thunkApi) => {
    // try {
    //   return await userService.signUserIn(user);
    // } catch ({ message }) {
    //   return thunkApi.rejectWithValue(message);
    // }
    try {
      const { data } = await axios.post("http://localhost:5000/login", user, {
        withCredentials: true,
      });

      if (data) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      console.log("etbbte");
      return data;
    } catch ({ message }) {
      return message;
    }
  }
);

export const userSlice = createSlice({
  name: "userLoggedIn",
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.user = false;
    },
    logUserIn: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUserIn.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(signUserIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(signUserIn.pending, (state) => {
        state.isLoggedIn = false;
      });
  },
});

export const { logUserOut, logUserIn, changeMessage } = userSlice.actions;

export default userSlice.reducer;
