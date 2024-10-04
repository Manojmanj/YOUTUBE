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
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
