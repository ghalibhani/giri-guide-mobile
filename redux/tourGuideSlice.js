import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchTourGuideById = createAsyncThunk(
  "tourGuide/fetchTourGuide",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`tour-guide/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchTourGuideProfileByUserId = createAsyncThunk(
  "tourGuide/fetchTourGuideProfile",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `tour-guide/profile`,
        credentials
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  // FETCH TOUR GUIDE BY ID
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
  mountains: [],
  loading: false,
  error: null,
  // PROFILE GUIDE
  userId: "",
  tourGuideId: "",
  email: "",
  name: "",
  gender: "",
  nik: "",
  birthDate: "",
  description: "",
  address: "",
  maxHiker: 0,
  price: 0,
  additionalPrice: 0,
  totalPorter: 0,
  pricePorter: 0,
  image: "",
  totalCustomer: 0,
  donePercentage: 0,
  rejectPercentage: 0,
  rating: 0,
  totalReview: 0,
  isLoading: false,
  error: null,
};

const tourGuideSlice = createSlice({
  name: "tourGuide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH TOUR GUIDE BY ID
      .addCase(fetchTourGuideById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTourGuideById.fulfilled, (state, action) => {
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
      .addCase(fetchTourGuideById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // FETCH PROFILE GUIDE BY USER ID
      .addCase(fetchTourGuideProfileByUserId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTourGuideProfileByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload.userId;
        state.tourGuideId = action.payload.tourGuideId;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.gender = action.payload.gender;
        state.nik = action.payload.nik;
        state.birthDate = action.payload.birthDate;
        state.description = action.payload.description;
        state.address = action.payload.address;
        state.maxHiker = action.payload.maxHiker;
        state.price = action.payload.price;
        state.additionalPrice = action.payload.additionalPrice;
        state.totalPorter = action.payload.totalPorter;
        state.pricePorter = action.payload.pricePorter;
        state.image = action.payload.image;
        state.totalCustomer = action.payload.totalCustomer;
        state.donePercentage = action.payload.donePercentage;
        state.rejectPercentage = action.payload.rejectPercentage;
        state.rating = action.payload.rating;
        state.totalReview = action.payload.totalReview;
      })
      .addCase(fetchTourGuideProfileByUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default tourGuideSlice.reducer;
