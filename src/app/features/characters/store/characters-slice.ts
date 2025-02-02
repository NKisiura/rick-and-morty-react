import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from "@reduxjs/toolkit";
import { LoadingStatus, PaginationInfo } from "@shared/types/http";
import { Character } from "@features/characters/model";
import {
  getCharacterById,
  getCharactersByFilter,
} from "./characters-actions.ts";

interface CharactersState {
  characters: EntityState<Character, number>;
  paginationInfo: PaginationInfo | null;
  status: LoadingStatus;
  errorMessage: string | null;
}

const initialState: CharactersState = {
  characters: {
    ids: [],
    entities: {},
  },
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
    charactersCleaned() {
      return initialState;
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
      charactersAdapter.setAll(state.characters, results);
    });
    builder.addCase(
      getCharactersByFilter.rejected,
      (state, { error, meta: { aborted } }) => {
        if (aborted) {
          return;
        }

        const { message = "Failed load characters!" } = error;

        state.status = "failed";
        state.paginationInfo = null;
        state.errorMessage = message;
        charactersAdapter.removeAll(state.characters);
      },
    );
    builder.addCase(getCharacterById.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getCharacterById.fulfilled, (state, { payload }) => {
      const character = payload;

      state.status = "succeeded";
      charactersAdapter.setAll(state.characters, [character]);
    });
    builder.addCase(
      getCharacterById.rejected,
      (state, { error, meta: { aborted } }) => {
        if (aborted) {
          return;
        }

        const { message = "Failed load character!" } = error;

        state.status = "failed";
        state.errorMessage = message;
        charactersAdapter.removeAll(state.characters);
      },
    );
  },
  selectors: {
    selectCharacters: ({ characters }) =>
      charactersSelectors.selectAll(characters),
    selectCharactersPaginationInfo: ({ paginationInfo }) => paginationInfo,
    selectCharactersLoadingStatus: ({ status }) => status,
    selectCharactersErrorMessage: ({ errorMessage }) => errorMessage,
  },
});

const { reducer, actions, selectors } = charactersSlice;

export const charactersReducer = reducer;
export const { charactersCleaned } = actions;
export const {
  selectCharacters,
  selectCharactersPaginationInfo,
  selectCharactersLoadingStatus,
  selectCharactersErrorMessage,
} = selectors;
