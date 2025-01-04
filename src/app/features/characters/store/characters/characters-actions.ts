import { AppThunk, createAppAsyncThunk } from "@app/store/thunk.ts";
import { charactersFilterChanged } from "@features/characters/store";
import { CharacterFilter } from "@features/characters/model";

export const updateCharactersFilterAndRefetch =
  (filter: CharacterFilter): AppThunk =>
  (dispatch) => {
    dispatch(charactersFilterChanged(filter));
    void dispatch(getCharactersByFilter(filter));
  };

export const getCharactersByFilter = createAppAsyncThunk(
  "characters/getCharactersByFilter",
  async (filter: CharacterFilter, { extra }) => {
    const { charactersService } = extra.services;

    return await charactersService.getCharactersByFilter(filter);
  },
  {
    condition(_, { getState }) {
      const { status } = getState().characters;

      return status !== "pending";
    },
  },
);
