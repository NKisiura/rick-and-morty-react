import { createAppAsyncThunk } from "@app/store/thunk.ts";
import { CharacterFilter } from "@features/characters/model";

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
