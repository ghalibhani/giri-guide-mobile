import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/test-userSlice";
import registerReducer from "./redux/registerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer
  },
});

export default store;
