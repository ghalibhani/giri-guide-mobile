import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchAllMountains = createAsyncThunk(
    'mountain/fetchAllMountains',
    async({page = 1, size = 40}, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get(`/mountains?page=${page}&size=${size}`)
            return response.data
        } catch(e) {
            return rejectWithValue(error.response?.data || 'Network error');
        }
    }
)

export const getMountainById = createAsyncThunk(
    'mountain/getMountainById',
    async(mountainId, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/mountains/${mountainId}`)
            return response.data
        } catch(e){
            return rejectWithValue(error.response?.data || 'Network error')
        }
    }
)

export const getHikingPointsByMountainId = createAsyncThunk(
    'mountain/getHikingPointsByMountainId',
    async(mountainId, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/mountains/${mountainId}/hiking-points`)
            return response.data
        } catch(e) {
            return rejectWithValue(error.response?.data || 'Network error')
        }
    }
)


export const getHikingPointDetailByHikingPointId = createAsyncThunk(
    'mountain/getHikingPointDetailByHikinPointId',
    async(hikingPointId, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/mountains/hiking-points/${hikingPointId}`)
            return response.data
        } catch(e) {
            return rejectWithValue(error.response?.data || 'Network error')
        }
    }
)

const mountainSlice = createSlice({
    name: 'mountain',
    initialState: {
        mountains: [],
        mountain: {},
        hikingPoints: [],
        hikingPoint: {},
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
                fetchAllMountains.pending, (state) => {
                    state.status = 'loading'; // Set loading status while fetching
            })
            .addCase(
                fetchAllMountains.fulfilled, (state, action) => {
                    state.mountains = action.payload.data
                    state.paging = action.payload.paging
                    state.status = "succeed"
                    state.error = null
            })
            .addCase(
                fetchAllMountains.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.payload
            })


            .addCase(
                getMountainById.pending, (state) => {
                    state.status = 'loading'; // Set loading status while fetching
            })
            .addCase(
                getMountainById.fulfilled, (state, action) => {
                    state.mountain = action.payload.data
                    state.status = "succeed"
                    state.error = null
            })
            .addCase(
                getMountainById.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.payload
            })


            .addCase(
                getHikingPointsByMountainId.pending, (state) => {
                    state.status = 'loading'; // Set loading status while fetching
            })
            .addCase(
                getHikingPointsByMountainId.fulfilled, (state, action) => {
                    state.hikingPoints = action.payload.data
                    state.status = "succeed"
                    state.error = null
            })
            .addCase(
                getHikingPointsByMountainId.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.payload
            })


            .addCase(
                getHikingPointDetailByHikingPointId.pending, (state) => {
                    state.status = 'loading'; // Set loading status while fetching
            })
            .addCase(
                getHikingPointDetailByHikingPointId.fulfilled, (state, action) => {
                    state.hikingPoint = action.payload.data
                    state.status = "succeed"
                    state.error = null
            })
            .addCase(
                getHikingPointDetailByHikingPointId.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.payload
            })


            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.error = action.payload
                    state.status = "failed"
                }
            )
    }
})

export default mountainSlice.reducer;