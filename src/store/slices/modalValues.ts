import { createSlice } from "@reduxjs/toolkit";

// Create slice
const modalValuesSlice = createSlice({
  name: "modalValues", // Slice name
  initialState: {
    title: "",
    description: "",
    dueDate: new Date(),
    status: "",
  }, // Initial state
  reducers: {
    // Define reducers
    title(state, action) {
      state.title = action.payload;
    },
    description(state, action) {
      state.description = action.payload;
    },
    dueDate(state, action) {
      state.dueDate = action.payload;
    },
    status(state, action) {
      state.status = action.payload;
    },
  },
});

// Export actions and reducer
export const { title, description, dueDate, status } = modalValuesSlice.actions;
export const taskModalReducer = modalValuesSlice.reducer;

interface MyState {
  value: string[]; // Assuming your array contains strings
}

const tagsSlice = createSlice({
  name: "tags",
  initialState: <MyState>{ value: [] },
  reducers: {
    addTag(state, action) {
      state.value = [...state.value, action.payload];
    },
    removeTag(state, action) {
      state.value = state.value.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTag, removeTag } = tagsSlice.actions;
export const tagsReducer = tagsSlice.reducer;
