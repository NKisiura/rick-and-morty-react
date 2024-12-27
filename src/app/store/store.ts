import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "@features/characters/store";
import { Services } from "@app/context/Services";

export const initStore = ({ services }: { services: Services }) => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: { services },
        },
      });
    },
  });
};

export type AppStore = ReturnType<typeof initStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
