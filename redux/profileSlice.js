import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`profile/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async ({ id, profileData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`profile/${id}`, profileData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  id: "",
  fullName: "",
  birthDate: "",
  nik: "",
  address: "",
  gender: "",
  email: "",
  imageId: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.fullName = action.payload.fullName;
        state.birthDate = action.payload.birthDate;
        state.nik = action.payload.nik;
        state.address = action.payload.address;
        state.gender = action.payload.gender;
        state.email = action.payload.email;
        state.imageId = action.payload.imageId;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      })
      .addCase(updateProfile.pending, (state) => {
        // console.log("update profile pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        // console.log("update profile fulfilled");
        state.loading = false;
        state.fullName = action.payload.fullName;
        state.gender = action.payload.gender;
        state.address = action.payload.address;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        // console.log("update profile rejected", action);
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
