import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import userReducer from "./redux/test-userSlice";
import profileReduce from "./redux/profileSlice";
import tourGuideReducer from "./redux/tourGuideSlice";
import tourGuideReviewReducer from "./redux/guideReviewSlice";
import registerReducer from "./redux/registerSlice";
import mountainReducer from "./redux/mountainSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    profile: profileReduce,
    tourGuide: tourGuideReducer,
    tourGuideReview: tourGuideReviewReducer,
    register: registerReducer,
    mountain: mountainReducer,
  },
});

export default store;
