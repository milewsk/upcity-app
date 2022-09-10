import {
  configureStore,
  applyMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import UserSlice from "./userSilce";
import authSlice from "./authSlice";
import navigationSlice from "./navigationSlice";
import modalSilce from "./modalSilce";

export const store = configureStore({
  reducer: {
    userReducer: UserSlice,
    authSlice: authSlice,
    navigationSlice: navigationSlice,
    modalSlice: modalSilce,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
