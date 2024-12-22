import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "@features/characters/store";
import { rickAndMortyApi } from "@app/api";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
