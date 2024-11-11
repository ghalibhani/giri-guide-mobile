import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../api/axiosInstance";

// Thunk untuk login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("auth/login", credentials);
      const { data } = response.data;

      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("userRole", data.role);
      await AsyncStorage.setItem("userId", data.userId);
      await AsyncStorage.setItem("email", data.email);
      await AsyncStorage.setItem("guideName", data.name);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `auth/change-password/${passwordData.userId}`,
        null,
        {
          params: {
            oldPassword: passwordData.oldPassword,
            newPassword: passwordData.newPassword,
          },
        }
      );

      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    role: null,
    userId: null,
    email: null,
    name: null,
    loading: false,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.role = "";
      state.userId = null;
      state.user = null;
      state.loading = false;
      state.error = null;
      state.email = null;
      state.name = null;
      state.isLoggedIn = false;

      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("userRole");
      AsyncStorage.removeItem("userId");
      AsyncStorage.removeItem("email");
      AsyncStorage.removeItem("guideName");
    },

    loginRefresh: (state, action) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.isLoggedIn = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.userId = action.payload.userId;
        state.email = action.payload.email;
        state.guideName = action.payload.name;
        state.isLoggedIn = true;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.message = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, loginRefresh } = authSlice.actions;
export default authSlice.reducer;
