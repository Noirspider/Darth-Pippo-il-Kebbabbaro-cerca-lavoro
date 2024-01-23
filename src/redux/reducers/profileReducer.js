import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProfile: null,
  myExperience: null,
  refreshExp: false,
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
      state.refreshExp = !state.refreshExp;
    },
  },
});

export const { setMyProfile, setMyExperience, refreshExperience } = profileReducer.actions;
export default profileReducer.reducer;
