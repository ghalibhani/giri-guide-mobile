import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const getAllTransactionsByUserId = createAsyncThunk(
    "transactionHistory/getAllTransactionsByUserId",
    async({userId, listStatus, userRole, page = 1, size = 40}, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/transactions/history?page=${page}&size=${size}&userId=${userId}&status=${listStatus}&role=${userRole}`);
            // console.log(response)
            return response.data;
        } catch(e) {
            return rejectWithValue(e.response.data.message || 'Network error')
        }
    }
)

export const getTransactionHistoryByTransactionId = createAsyncThunk(
    "transactionHistory/getTransactionHistoryByTransactionId",
    async(transactionId, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.get(`/transactions/${transactionId}`)
            return response.data
        } catch(e) {
            return rejectWithValue(e.response?.data || 'Network error')
        }
    }
)

export const getSnapTokenByTransactionId = createAsyncThunk(
    "transaction/getSnapTokenByTransactionId",
    async(transactionId, {rejectWithValue}) => {
        try{
            console.log('ini berhasil di awal')
            const response = await axiosInstance.post(`/transaction-payment?transactionId=${transactionId}`)
            console.log(response)
            return response.data
        } catch(e) {
            return rejectWithValue(e.response?.data || 'Network error')
        }
    }
)

export const createNewTransaction = createAsyncThunk(
    "transaction/createNewTransaction",
    async(dataTransaction, {rejectWithValue}) => {
        try{
            // console.log("hiyttt")
            // console.log(`ini dari slice ${dataTransaction}`)
            const response = await axiosInstance.post('/transactions', dataTransaction, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            // console.log(response)
            return response.data.transactionStatus;
        } catch(e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const giveRatingForDoneTransaction = createAsyncThunk(
    "transaction/giveRatingForDoneTransaction",
    async({dataRating, transactionId}, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.put(`/guide/reviews/${transactionId}`, dataRating, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('ini response setelah kasih rating: ', response)
            return response.data.rating;
        } catch(e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const updatingTransactionStatus = createAsyncThunk(
    "transaction/updatingTransactionStatus",
    async({dataBody, transactionId}, {rejectWithValue}) => {
        try{
            const response = await axiosInstance.put(`/transactions/${transactionId}`, dataBody, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            return response.data.transactionStatus;
        } catch(e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        transactionsHistory: [],
        transactionHistoryDetail: {},
        snapToken: {},
        paging: {
            page: 1,
            size: 40,
            totalPages: 1,
            totalElements: 0,
        },
        status: "idle",
        error: null,
    },
    reducers: {
        resetSnapToken: (state) => {
            state.snapToken = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTransactionsByUserId.pending, (state) => {
                state.status = "loading"; // Set loading status while fetching
            })
            .addCase(getAllTransactionsByUserId.fulfilled, (state, action) => {
                state.transactionsHistory = action.payload.data;
                state.paging = action.payload.paging;
                state.status = "succeed";
                state.error = null;
            })
            .addCase(getAllTransactionsByUserId.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })


            .addCase(getTransactionHistoryByTransactionId.pending, (state) => {
                state.status = "loading"; // Set loading status while fetching
            })
            .addCase(getTransactionHistoryByTransactionId.fulfilled, (state, action) => {
                state.transactionHistoryDetail = action.payload.data;
                state.paging = action.payload.paging;
                state.status = "succeed";
                state.error = null;
            })
            .addCase(getTransactionHistoryByTransactionId.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })


            .addCase(getSnapTokenByTransactionId.pending, (state) => {
                state.status = "loading"; // Set loading status while fetching
            })
            .addCase(getSnapTokenByTransactionId.fulfilled, (state, action) => {
                state.snapToken = action.payload.data;
                state.status = "succeed";
                state.error = null;
            })
            .addCase(getSnapTokenByTransactionId.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })


            .addCase(createNewTransaction.pending, (state) => {
                state.status = "loading"; // Set loading status while fetching
            })
            .addCase(createNewTransaction.fulfilled, (state, action) => {
                state.status = "succeed";
                state.error = null;
            })
            .addCase(createNewTransaction.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })


            .addCase(giveRatingForDoneTransaction.pending, (state) => {
                state.status = "loading"; // Set loading status while fetching
            })
            .addCase(giveRatingForDoneTransaction.fulfilled, (state, action) => {
                state.status = "succeed";
                state.error = null;
            })
            .addCase(giveRatingForDoneTransaction.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })


            .addCase(updatingTransactionStatus.pending, (state) => {
                state.status = "loading"; // Set loading status while fetching
            })
            .addCase(updatingTransactionStatus.fulfilled, (state, action) => {
                state.status = "succeed";
                state.error = null;
            })
            .addCase(updatingTransactionStatus.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
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

export const { resetSnapToken } = transactionSlice.actions;
export default transactionSlice.reducer;