import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchTourGuideReview = createAsyncThunk(
  "tourGuideReview/fetchTourGuideReview",
  async ({ id, page = 1, size = 10 }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `guide/${id}/reviews?page=${page}&size=${size}`
      );
      console.log("sliceee-------", id);
      return response.data;
    } catch (error) {
      console.log("----error-----", error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  message: "",
  reviews: [],
  paging: {
    page: 1,
    size: 10,
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
        // console.log("ini loading");
        state.error = null;
      })
      .addCase(fetchTourGuideReview.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("bawahhh -----", action.payload.data);
        state.reviews = action.payload;
      })
      .addCase(fetchTourGuideReview.rejected, (state, action) => {
        // console.log(action.payload);
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      });
  },
});

export default guideReviewSlice.reducer;
