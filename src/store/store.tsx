import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import UserSlice from "./userSilce";
import authSlice from "./authSlice";
import navigationSlice from "./navigationSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    userReducer: UserSlice,
    authSlice: authSlice,
    navigationSlice: navigationSlice,
    modalSlice: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
