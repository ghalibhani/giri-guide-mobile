import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/test-userSlice";
import registerReducer from "./redux/registerSlice";
import mountainReducer from "./redux/mountainSlice";
import tourGuideReducer from "./redux/tourGuideSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    mountain: mountainReducer,
    tourGuide: tourGuideReducer,
  },
});

export default store;
