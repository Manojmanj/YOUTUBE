import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = null;
    },
    openMenu: (state) => {
      state.isMenuOpen = true; // Set isMenuOpen to true when opening
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;

export default appSlice.reducer;
