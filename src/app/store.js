import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import usersReducer from "../components/user/usersSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
