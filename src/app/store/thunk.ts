import { createAsyncThunk, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { Services } from "@app/context/Services";
import { AppDispatch, RootState } from "./store.ts";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: { services: Services };
}>();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  { services: Services },
  UnknownAction
>;
