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
      const response = await axiosInstance.get(`tour-guide/${id}`);
      return response.data;
    } catch (error) {
    //   console.log(error.response);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const fetchTourGuideProfileByUserId = createAsyncThunk(
  "tourGuide/fetchTourGuideProfile",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`tour-guide/profile/${id}`);
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchTourGuideProfileHikingPointsByUserId = createAsyncThunk(
  "tourGuide/fetchTourGuideProfileHikingPoints",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `tour-guide/profile/${id}/hiking-points`
      );
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const toggleTourGuideHikingPoint = createAsyncThunk(
  "tourGuide/toggleTourGuideHikingPoint",
  async ({ tourGuideId, hikingPointId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `tour-guide/profile/${tourGuideId}/hiking-points/${hikingPointId}/toggle`
      );
      // console.log("---------", response.data);
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

// toggleTourGuideOnOrOff
export const toggleTourGuideOnOrOff = createAsyncThunk(
  "tourGuide/toggleTourGuideOnOrOff",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `tour-guide/${id}/toggle-active`
      );
      console.log("---------", response.data);
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
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
        state.status = "loading";
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
        // console.log(action.payload)
      })
      .addCase(fetchTourGuideById.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
        // console.log(action.payload)
      })

      // FETCH PROFILE GUIDE BY USER ID
      .addCase(fetchTourGuideProfileByUserId.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchTourGuideProfileByUserId.fulfilled, (state, action) => {
        state.tourGuide = action.payload;
        state.error = null;
        state.status = "succeed";
      })
      .addCase(fetchTourGuideProfileByUserId.rejected, (state, action) => {
        state.error = action.payload;
      })

      // FETCH PROFILE GUIDE HIKING POINT BY USER ID
      .addCase(fetchTourGuideProfileHikingPointsByUserId.pending, (state) => {
        state.status = 'loading'
        state.error = null;
      })
      .addCase(
        fetchTourGuideProfileHikingPointsByUserId.fulfilled,
        (state, action) => {
          state.tourGuides = action.payload.data;
          state.error = null;
          state.status = "succeed";
        }
      )
      .addCase(
        fetchTourGuideProfileHikingPointsByUserId.rejected,
        (state, action) => {
          state.error = action.payload;
        }
      )

      // TOGGLE TOUR GUIDE ON OR OFF
      .addCase(toggleTourGuideOnOrOff.fulfilled, (state, action) => {
        state.tourGuide = action.payload;
        state.error = null;
        state.status = "succeed";
      })
      .addCase(toggleTourGuideOnOrOff.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(toggleTourGuideOnOrOff.pending, (state) => {
        state.error = null;
      });
  },
});

export default tourGuideSlice.reducer;
