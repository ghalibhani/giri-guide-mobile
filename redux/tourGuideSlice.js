import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const getTourGuideListsByHikingPointId = createAsyncThunk(
    'tourGuide/getTourGuideListsByHikingPointId',
    async({hikingPointId, page = 1, size = 40}, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/tour-guide?hikingPoint=${hikingPointId}&page=${page}&size=${size}`)
            return response.data
        } catch(e) {
            return rejectWithValue(error.response?.data || 'Network error')
        }
    }
)

const tourGuideSlice = createSlice({
    name: 'tourGuide',
    initialState: {
        tourGuides: [],
        paging: {
            page: 1,
            size: 40,
            totalPages: 1,
            totalElements: 0
        },
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getTourGuideListsByHikingPointId.pending, (state) => {
                    state.status = 'loading'; // Set loading status while fetching
            })
            .addCase(
                getTourGuideListsByHikingPointId.fulfilled, (state, action) => {
                    state.tourGuides = action.payload.data
                    state.paging = action.payload.paging
                    state.status = "succeed"
                    state.error = null
            })
            .addCase(
                getTourGuideListsByHikingPointId.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.payload
            })
    }
})

export default tourGuideSlice.reducer;