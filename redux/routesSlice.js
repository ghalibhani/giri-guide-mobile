import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const fetchAllRoutes = createAsyncThunk(
    'travelRoute/fetchAllTravelRoutes',
    async({page = 1, size = 40}, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/location-routes?page=${page}&size=${size}`)
            return response.data
        } catch(e) {
            return rejectWithValue(error.response?.data || 'Network error')
        }
    }
)

export const getRouteById = createAsyncThunk(
    'travelRoute/getRouteById',
    async(routeId, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/location-routes/${routeId}`)
            return response.data
        } catch(e) {
            return rejectWithValue(error.response?.data || 'Network error')
        }
    }
)

const routesSlice = createSlice({
    name: 'travelRoute',
    initialState: {
        travelRoutes: [],
        travelRoute: {},
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
                fetchAllRoutes.pending, (state) => {
                    state.status = 'loading';
            })
            .addCase(
                fetchAllRoutes.fulfilled, (state, action) => {
                    state.travelRoutes = action.payload.data
                    state.paging = action.payload.paging
                    state.status = "succeed"
                    state.error = null
            })
            .addCase(
                fetchAllRoutes.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.payload
            })


            .addCase(
                getRouteById.pending, (state) => {
                    state.status = 'loading';
            })
            .addCase(
                getRouteById.fulfilled, (state, action) => {
                    state.travelRoute = action.payload.data
                    state.status = "succeed"
                    state.error = null
            })
            .addCase(
                getRouteById.rejected, (state, action) => {
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

export default routesSlice.reducer;