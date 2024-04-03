import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobs-slice";

const store = configureStore({
  reducer: {jobs: jobsSlice.reducer}
})

export default store;