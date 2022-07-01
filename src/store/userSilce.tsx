import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";
import Cookies from "universal-cookie";

interface IUserState {
  isLoggedIn: boolean;
  token: string | null;
  sessionRemainingTime: number | null;
}

interface ILoginCrudencials {
  expirationTime: number;
}

const cookies = new Cookies();

const initialState: IUserState = {
  isLoggedIn: cookies.get("jwt") ? true : false,
  token: cookies.get("jwt"),
  sessionRemainingTime: Number(localStorage.getItem("expirationTime")),
};

let logoutTimer: NodeJS.Timeout;

export const UserSlice = createSlice({
  name: "UserController",
  initialState,
  reducers: {
    userLogin: (
      state: IUserState,
      action: PayloadAction<ILoginCrudencials>
    ) => {
      state.isLoggedIn = true;
      state.sessionRemainingTime = calculateRemainingTime(
        action.payload.expirationTime
      );

      addCrudentialsToStorage(state.sessionRemainingTime.toString());

      logoutTimer = setTimeout(userLogout, state.sessionRemainingTime);
    },

    userLogout: (state: IUserState) => {
      state.isLoggedIn = false;

      state.token = null;
      state.sessionRemainingTime = 0;

      window.localStorage.removeItem("expirationTime");

      if (logoutTimer) {
        clearTimeout(logoutTimer);
      }
    },
    retriveStoredToken: (state: IUserState) => {
      const storedToken: string | null = cookies.get("jwt");
      const storedExpirationTime: string | null =
        window.localStorage.getItem("expirationTime");

      const remainingTime: number = calculateRemainingTime(
        Number(storedExpirationTime)
      );

      if (remainingTime <= 30000) {
        window.localStorage.removeItem("expirationTime");

        UserSlice.caseReducers.userLogout(state);
      }

      console.log("stored " + storedToken);

      if (storedToken !== null) {
        console.log("triggered");
        const payload: ILoginCrudencials = {
          expirationTime: remainingTime,
        };
        UserSlice.caseReducers.userLogin(state, { payload, type: "login" });
      }
    },
  },
});

const addCrudentialsToStorage = (expirationTime: string) => {
  window.localStorage.setItem("expirationTime", expirationTime);
};

const calculateRemainingTime = (expirationTime: number): number => {
  const currentTime: number = new Date().getTime();
  const remainingTime: number = expirationTime - currentTime;

  return remainingTime;
};

export const { userLogin, userLogout, retriveStoredToken } = UserSlice.actions;

export default UserSlice.reducer;
