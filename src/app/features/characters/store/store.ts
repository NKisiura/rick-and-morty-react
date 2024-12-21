import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "@features/characters/model";

interface CharactersState {
  characters: Character[];
}

const initialState: CharactersState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    charactersFulfilled: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
  selectors: {
    selectCharacters: ({ characters }) => characters,
  },
});

const { reducer, actions, selectors } = charactersSlice;

export const charactersReducer = reducer;
export const { charactersFulfilled } = actions;
export const { selectCharacters } = selectors;
