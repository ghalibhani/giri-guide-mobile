import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchTourGuide = createAsyncThunk(
  "tourGuide/fetchTourGuide",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`tour-guide/${id}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  id: "",
  name: "",
  image: "",
  description: "",
  isActive: false,
  rating: 0,
  totalReview: 0,
  totalCustomer: 0,
  price: 0,
  additionalPrice: 0,
  totalPorter: 0,
  pricePorter: 0,
  mountains: [], // Menyimpan daftar gunung
  loading: false,
  error: null,
};

const tourGuideSlice = createSlice({
  name: "tourGuide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTourGuide.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTourGuide.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
        state.image = action.payload.image;
        state.description = action.payload.description;
        state.isActive = action.payload.isActive;
        state.rating = action.payload.rating;
        state.totalReview = action.payload.totalReview;
        state.totalCustomer = action.payload.totalCustomer;
        state.price = action.payload.price;
        state.additionalPrice = action.payload.additionalPrice;
        state.totalPorter = action.payload.totalPorter;
        state.pricePorter = action.payload.pricePorter;
        state.mountains = action.payload.mountains;
      })
      .addCase(fetchTourGuide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tourGuideSlice.reducer;
