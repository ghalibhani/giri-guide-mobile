import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchHomeTransactionGuide = createAsyncThunk(
  "statsTransactionGuide/fetchHomeTransactionGuide",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`tour-guide/stats/${id}`);
      return response.data;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response?.data || "Network error");
    }
  }
);

export const fetchHistoryTransactionGuide = createAsyncThunk(
  "statsTransactionGuide/fetchHistoryTransactionGuide",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`tour-guide/deposit/${id}`);
      return response.data;
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error.response?.data || "Network error");
    }
  }
);

export const withdrawTransactionGuide = createAsyncThunk(
  "statsTransactionGuide/withdrawTransactionGuide",
  async ({ id, nominal, message }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `tour-guide/deposit/${id}/withdraw`,
        { nominal, message }
      );
      console.log("---------", response.data);
      return response.data;
    } catch (error) {
      // console.log(error.response?.data);
      return rejectWithValue(error.response?.data || "Network error");
    }
  }
);

const initialState = {
  statsGuide: {},
  statsGuides: [],
  error: null,
  message: "",
  isLoading: false,
  paging: {
    page: 1,
    size: 5,
    totalPages: 1,
    totalElements: 0,
  },
};

const statsTransactionGuideSlice = createSlice({
  name: "statsTransactionGuide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // FETCH HISTORY TRANSACTION GUIDE
      .addCase(fetchHistoryTransactionGuide.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHistoryTransactionGuide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statsGuides = action.payload.data;
      })
      .addCase(fetchHistoryTransactionGuide.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      })

      // FETCH HOME TRANSACTION GUIDE
      .addCase(fetchHomeTransactionGuide.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHomeTransactionGuide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statsGuide = action.payload.data;
      })
      .addCase(fetchHomeTransactionGuide.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      })

      // WITHDRAW TRANSACTION GUIDE
      .addCase(withdrawTransactionGuide.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(withdrawTransactionGuide.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(withdrawTransactionGuide.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
          ? action.payload.message
          : "Something went wrong";
      });
  },
});

export default statsTransactionGuideSlice.reducer;
