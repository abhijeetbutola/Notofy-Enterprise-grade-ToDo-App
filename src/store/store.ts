import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./slices/calendarSlice.ts";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    // Add other slices here if needed
  },
});

export default store;
