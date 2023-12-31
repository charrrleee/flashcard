import { createSlice } from "@reduxjs/toolkit";
import Card from "../../types/Card";

export const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState: {
    cards: [],
  },
  reducers: {
    set: (state: CardsState, action) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export interface CardsState {
  cards: Card[];
}

export const { set } = flashcardsSlice.actions;

export default flashcardsSlice.reducer;
