import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const createNewHiker = createAsyncThunk(
    'register/createNewHiker',
    async(dataHiker, {rejectedWithValue}) => {
        try{
            const response = await axiosInstance.post('/auth/register', dataHiker, {
                headers: {
                    'Content-Type' : 'application/json',
                },
            });
            return response.data.message;
        } catch(e) {
            // console.log(e.response.data.message)
            return rejectedWithValue(e.response.data.message)
        }
    }
)

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        status: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                createNewHiker.fulfilled, (state, action) => {
                    state.status = 'succeed'
                    state.error = null
                }
            )
            .addCase(
                createNewHiker.rejected, (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message
                    // console.log(action)
                }
            )

            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.error = action.payload
                    state.status = 'failed'
                }
            )
    }
})

export default registerSlice.reducer;