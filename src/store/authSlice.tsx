import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

interface IAuthState {
  user?: { email: string } | null;
  token?: string | null;
}

const initialState: IAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setCrudentials: (
      state: IAuthState,
      action: PayloadAction<{
        user?: { email: string };
        token?: string;
      }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state: IAuthState) => {
      state.user = undefined;
      state.token = null;
    },
  },
});

export const { setCrudentials, logOut } = authSlice.actions;

export default authSlice.reducer;
