import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/test-userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
