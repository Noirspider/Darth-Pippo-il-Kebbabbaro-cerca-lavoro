import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProfile: null,
  myExperience: null,
  refreshExperience: false,
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {
    setMyProfile: (state, action) => {
      state.myProfile = action.payload;
    },
    setMyExperience: (state, action) => {
      state.myExperience = action.payload;
    },
    refreshExperience: (state) => {
      state.refreshExperience = !state.refreshExperience;
    },
  },
});

export const { setMyProfile, setMyExperience, refreshExperience } = profileReducer.actions;
export default profileReducer.reducer;
