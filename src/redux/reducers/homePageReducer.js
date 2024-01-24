import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPost: null,
};

const homePageReducer = createSlice({
  name: "homePageReducer",
  initialState,
  reducers: {
    setAllPost: (state, action) => {
      state.allPost = action.payload;
    },
  },
});

export const { setAllPost } = homePageReducer.actions;
export default homePageReducer.reducer;
