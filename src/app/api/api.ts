import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: () => ({}),
});
