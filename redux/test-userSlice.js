import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userRole: "tourguide",
  },
  reducers: {
    setUserRole(state, action) {
      state.userRole = action.payload;
    },
    clearUserRole(state) {
      state.userRole = null;
    },
  },
});

export const { setUserRole, clearUserRole } = userSlice.actions;
export default userSlice.reducer;
