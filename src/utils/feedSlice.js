
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const feedSlice = createSlice({
  name: "feed",
  initialState: [], // must be array
  reducers: {
    addFeed: (state, action) => action.payload,
    
    removeFeed: (state, action) =>{
      const newFeed = state.filter((feedRemove) =>feedRemove._id != action.payload)
      return newFeed;

    }
  }
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;