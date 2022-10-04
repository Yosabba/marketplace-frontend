import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  username: "",
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

export const signUserIn = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/login", user, {
        withCredentials: true,
      });

      if (data) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "userLoggedIn",
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.isLoggedIn = false;
    },
    logUserIn: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUserIn.pending, (state) => {
        state.isLoggedIn = false;
        state.isLoading = true;
      })
      .addCase(signUserIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(signUserIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logUserOut, logUserIn } = userSlice.actions;

export default userSlice.reducer;
