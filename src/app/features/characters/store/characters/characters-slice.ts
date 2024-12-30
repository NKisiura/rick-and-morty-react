import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from "@reduxjs/toolkit";
import { LoadingStatus, PaginationInfo } from "@shared/types/http";
import { Character } from "@features/characters/model";
import { getCharactersByFilter } from "./characters-actions.ts";

interface CharactersState extends EntityState<Character, number> {
  paginationInfo: PaginationInfo | null;
  status: LoadingStatus;
  errorMessage: string | null;
}

const initialState: CharactersState = {
  ids: [],
  entities: {},
  paginationInfo: null,
  status: "idle",
  errorMessage: null,
};

const charactersAdapter = createEntityAdapter<Character>({});
const charactersSelectors = charactersAdapter.getSelectors();

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    charactersViewLeft(state) {
      if (state.status !== "pending") {
        return initialState;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharactersByFilter.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getCharactersByFilter.fulfilled, (state, { payload }) => {
      const { info, results } = payload;

      state.status = "succeeded";
      state.paginationInfo = info;
      charactersAdapter.setAll(state, results);
    });

    builder.addCase(getCharactersByFilter.rejected, (state, { error }) => {
      const { message = "Couldn't fetch characters" } = error;

      state.status = "failed";
      state.paginationInfo = null;
      state.errorMessage = message;
      charactersAdapter.removeAll(state);
    });
  },
  selectors: {
    selectCharacters: (state) => charactersSelectors.selectAll(state),
    selectCharactersPaginationInfo: ({ paginationInfo }) => paginationInfo,
    selectCharactersLoadingStatus: ({ status }) => status,
    selectCharactersErrorMessage: ({ errorMessage }) => errorMessage,
  },
});

const { reducer, actions, selectors } = charactersSlice;

export const charactersReducer = reducer;
export const { charactersViewLeft } = actions;
export const {
  selectCharacters,
  selectCharactersPaginationInfo,
  selectCharactersLoadingStatus,
  selectCharactersErrorMessage,
} = selectors;
