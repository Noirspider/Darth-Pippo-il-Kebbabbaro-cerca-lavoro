import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProfile: null,
  myExperience: null,
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
  },
});

export const { setMyProfile, setMyExperience } = profileReducer.actions;
export default profileReducer.reducer;
