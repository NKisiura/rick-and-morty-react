import { createSlice } from "@reduxjs/toolkit";

interface CharactersState {
  test: string;
}

const initialState: CharactersState = {
  test: "test",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    tested: (state) => {
      state.test = "test";
    },
  },
  selectors: {
    selectTest: ({ test }) => test,
  },
});

const { reducer, actions, selectors } = charactersSlice;

export const charactersReducer = reducer;
export const { tested } = actions;
export const { selectTest } = selectors;
