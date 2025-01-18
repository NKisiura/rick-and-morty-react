import { createAppAsyncThunk } from "@app/store/thunk.ts";
import { CharacterFilter } from "@features/characters/model";

export const getCharactersByFilter = createAppAsyncThunk(
  "characters/getCharactersByFilter",
  (filter: CharacterFilter, { extra, signal }) => {
    const { charactersService } = extra.services;

    return charactersService.getCharactersByFilter(filter, { signal });
  },
);
