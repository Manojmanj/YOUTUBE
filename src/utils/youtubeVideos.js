import { createSlice } from "@reduxjs/toolkit";

const youtubeVideos = createSlice({
  name: "youtubeVideos",
  initialState: {
    videos: [],
  },
  reducers: {
    addYouTubeVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload]; // Correctly merge new videos
    },
    addNewVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload]; // Correctly merge new videos
    },
  },
});

export const { addYouTubeVideos, addNewVideos } = youtubeVideos.actions;
export default youtubeVideos.reducer;
