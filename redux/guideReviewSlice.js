import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchTourGuideReview = createAsyncThunk(
  "tourGuideReview/fetchTourGuideReview",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`guide/${id}/reviews`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  message: "",
  reviews: [],
  paging: {
    page: 1,
    size: 5,
    totalPages: 1,
    totalElements: 0,
  },
  isLoading: false,
  error: null,
};

const guideReviewSlice = createSlice({
  name: "tourGuideReview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTourGuideReview.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTourGuideReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchTourGuideReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      });
  },
});

export default guideReviewSlice.reducer;
