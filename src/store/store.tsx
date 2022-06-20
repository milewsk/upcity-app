import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import UserSlice from "./userSilce";

export const store = configureStore({
  reducer: {
    userReducer: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
