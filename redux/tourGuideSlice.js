// const tourGuideSlice = createSlice({
//   name: "tourGuide",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
// // FETCH TOUR GUIDE BY ID
// .addCase(fetchTourGuideById.pending, (state) => {
//   state.loading = true;
//   state.error = null;
// })
// .addCase(fetchTourGuideById.fulfilled, (state, action) => {
//   state.loading = false;
//   state.name = action.payload.name;
//   state.image = action.payload.image;
//   state.description = action.payload.description;
//   state.isActive = action.payload.isActive;
//   state.rating = action.payload.rating;
//   state.totalReview = action.payload.totalReview;
//   state.totalCustomer = action.payload.totalCustomer;
//   state.price = action.payload.price;
//   state.additionalPrice = action.payload.additionalPrice;
//   state.totalPorter = action.payload.totalPorter;
//   state.pricePorter = action.payload.pricePorter;
//   state.mountains = action.payload.mountains;
// })
// .addCase(fetchTourGuideById.rejected, (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// })

// // FETCH PROFILE GUIDE BY USER ID
// .addCase(fetchTourGuideProfileByUserId.pending, (state) => {
//   state.isLoading = true;
//   state.error = null;
// })
// .addCase(fetchTourGuideProfileByUserId.fulfilled, (state, action) => {
//   state.isLoading = false;
//   state.userId = action.payload.userId;
//   state.tourGuideId = action.payload.tourGuideId;
//   state.email = action.payload.email;
//   state.name = action.payload.name;
//   state.gender = action.payload.gender;
//   state.nik = action.payload.nik;
//   state.birthDate = action.payload.birthDate;
//   state.description = action.payload.description;
//   state.address = action.payload.address;
//   state.maxHiker = action.payload.maxHiker;
//   state.price = action.payload.price;
//   state.additionalPrice = action.payload.additionalPrice;
//   state.totalPorter = action.payload.totalPorter;
//   state.pricePorter = action.payload.pricePorter;
//   state.image = action.payload.image;
//   state.totalCustomer = action.payload.totalCustomer;
//   state.donePercentage = action.payload.donePercentage;
//   state.rejectPercentage = action.payload.rejectPercentage;
//   state.rating = action.payload.rating;
//   state.totalReview = action.payload.totalReview;
// })
// .addCase(fetchTourGuideProfileByUserId.rejected, (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// });
//   },
// });

// export default tourGuideSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const getTourGuideListsByHikingPointId = createAsyncThunk(
  "tourGuide/getTourGuideListsByHikingPointId",
  async ({ hikingPointId, page = 1, size = 40 }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/tour-guide?hikingPoint=${hikingPointId}&page=${page}&size=${size}`
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(error.response?.data || "Network error");
    }
  }
);

export const fetchTourGuideById = createAsyncThunk(
  "tourGuide/fetchTourGuide",
  async (id, { rejectWithValue }) => {
    try {
      console.log("console in slice", id);
      const response = await axiosInstance.get(`/tour-guide/${id}`);
      console.log("console in slice", response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response?.data);
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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const tourGuideSlice = createSlice({
  name: "tourGuide",
  initialState: {
    tourGuides: [],
    tourGuide: {},
    paging: {
      page: 1,
      size: 40,
      totalPages: 1,
      totalElements: 0,
    },
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // MARTA
      .addCase(getTourGuideListsByHikingPointId.pending, (state) => {
        state.status = "loading"; // Set loading status while fetching
      })
      .addCase(getTourGuideListsByHikingPointId.fulfilled, (state, action) => {
        state.tourGuides = action.payload.data;
        state.paging = action.payload.paging;
        state.status = "succeed";
        state.error = null;
      })
      .addCase(getTourGuideListsByHikingPointId.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // FETCH TOUR GUIDE BY ID
      .addCase(fetchTourGuideById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTourGuideById.fulfilled, (state, action) => {
        state.tourGuide = action.payload.data;
        state.error = null;
        state.status = "succeed";
      })
      .addCase(fetchTourGuideById.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      })

      // FETCH PROFILE GUIDE BY USER ID
      .addCase(fetchTourGuideProfileByUserId.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchTourGuideProfileByUserId.fulfilled, (state, action) => {
        state.tourGuide = action.payload.data;
        state.error = null;
        state.status = "succeed";
      })
      .addCase(fetchTourGuideProfileByUserId.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default tourGuideSlice.reducer;
