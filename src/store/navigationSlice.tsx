import { createSlice } from "@reduxjs/toolkit";

interface INavigationState {
  mobileLinksOpen: boolean;
  navigation: string;
}

const initialState: INavigationState = {
  mobileLinksOpen: false,
  navigation: window.innerWidth > 767 ? "desktop" : "mobile",
};

const navigationSlice = createSlice({
  initialState,
  name: "navigation",
  reducers: {
    openMobileLinks: (state: INavigationState) => {
      state.mobileLinksOpen = true;
    },
    closeMobileLinks: (state: INavigationState) => {
      state.mobileLinksOpen = false;
    },
    setNavigationMode: (state: INavigationState) => {
      if (window.innerWidth > 767) {
        state.navigation = "desktop";
      } else {
        state.navigation = "mobile";
      }
    },
  },
});

export const { openMobileLinks, setNavigationMode, closeMobileLinks } =
  navigationSlice.actions;

export default navigationSlice.reducer;
