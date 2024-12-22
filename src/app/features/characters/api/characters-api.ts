import { rickAndMortyApi } from "@app/api";
import { Character } from "@features/characters/model";

const charactersApi = rickAndMortyApi.injectEndpoints({
  endpoints: (build) => ({
    getCharacterById: build.query<Character, number>({
      query: (id) => `character/${id.toString()}`,
    }),
  }),
});

export const { useGetCharacterByIdQuery } = charactersApi;
