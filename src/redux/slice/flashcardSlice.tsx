import { createSlice } from "@reduxjs/toolkit";

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState: {
    id: "",
    name: "",
    createdAt: 0,
    qAndA: [],
  },
  reducers: {
    set: (state: FlashCardState, action) => {
      console.log(state, action.payload, "flashcardsSlice 222");

      state.id = action.payload.id;
      state.name = action.payload.name;
      state.createdAt = action.payload.createdAt;
      state.qAndA = action.payload.qAndA;
    },
    unset: (state: FlashCardState) => {
      state.id = "";
      state.name = "";
      state.createdAt = Date.now();
      state.qAndA = [];
    },
  },
});

export interface FlashCardState {
  id: string;
  name: string;
  createdAt: number;
  qAndA: Document[];
}

// Action creators are generated for each case reducer function
export const { set, unset } = flashcardSlice.actions;

export default flashcardSlice.reducer;
