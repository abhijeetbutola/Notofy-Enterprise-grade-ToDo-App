import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./slices/calendarSlice.ts";
import { tagsReducer, taskModalReducer } from "./slices/modalValues.ts";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    modalValues: taskModalReducer,
    tags: tagsReducer,
    // Add other slices here if needed
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {calendar: CalendarState, modalValues: ModalValuesState, tags: tagsState}
export type AppDispatch = typeof store.dispatch;

export default store;
