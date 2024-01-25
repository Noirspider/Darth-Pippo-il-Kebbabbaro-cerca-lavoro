import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsList: null,
};

const jobsReducer = createSlice({
  name: "jobsReducer",
  initialState,
  reducers: {
    setJobsList: (state, action) => {
      state.jobsList = action.payload;
    },
  },
});

export const { setJobsList } = jobsReducer.actions;
export default jobsReducer.reducer;
