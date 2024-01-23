import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myProfile: null,
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {
    setMyProfile: (state, action) => {
      state.myProfile = action.payload;
    },
  },
});

export const { setMyProfile } = profileReducer.actions;
export default profileReducer.reducer;
