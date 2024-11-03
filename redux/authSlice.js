import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Thunk untuk login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/login", credentials);
      const { data } = response.data;

      // Simpan data login di AsyncStorage
      await AsyncStorage.setItem("authToken", data.token);
      await AsyncStorage.setItem("userRole", data.role);
      await AsyncStorage.setItem("userId", data.userId);

      return data; // Return data untuk disimpan di Redux state
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk untuk logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      // Hapus data login dari AsyncStorage
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("userRole");
      await AsyncStorage.removeItem("userId");
    } catch (error) {
      return rejectWithValue("Gagal logout");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    role: null,
    userId: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.email;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.userId = action.payload.userId;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.role = null;
        state.userId = null;
        state.loading = false;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
