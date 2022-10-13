import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "",
  isLoggedIn: false,
  isLoading: false,
  error: "",
  allHouses: [],
};

export const createHouseListing = createAsyncThunk(
  "user/createHouseListing",
  async (house, { rejectWithValue, fulfillWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        "https://marketplace-backend-production-b296.up.railway.app/houses",
        house,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUserIn = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://marketplace-backend-production-b296.up.railway.app/login",
        user
      );

      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);
        localStorage.setItem("email", data.email);
      }
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUserUp = createAsyncThunk(
  "user/signUp",
  async (user, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://marketplace-backend-production-b296.up.railway.app/signup",
        user
      );

      if (data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);
        localStorage.setItem("email", data.email);
      }
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.isLoggedIn = false;
    },
    logUserIn: (state) => {
      state.isLoggedIn = true;
    },
    addHouse: (state, action) => {
      state.allHouses = action.payload;
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
      })
      .addCase(signUserUp.pending, (state) => {
        state.isLoggedIn = false;
        state.isLoading = true;
      })
      .addCase(signUserUp.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(signUserUp.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logUserOut, logUserIn, addHouse } = userSlice.actions;

export default userSlice.reducer;
