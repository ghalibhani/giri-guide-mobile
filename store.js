import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import userReducer from "./redux/test-userSlice";
import profileReduce from "./redux/profileSlice";
import tourGuideReducer from "./redux/tourGuideSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    profile: profileReduce,
    tourGuide: tourGuideReducer,
  },
});

export default store;
