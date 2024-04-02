import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    value: null,
  },
  reducers: {
    setDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDate } = calendarSlice.actions;
export default calendarSlice.reducer;
