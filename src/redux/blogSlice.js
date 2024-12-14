// src/redux/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogData: [],
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    }
  },
});

export const { setBlogData } = blogSlice.actions;
export default blogSlice.reducer;
