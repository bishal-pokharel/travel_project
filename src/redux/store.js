// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import destinationApiSlice from './destinationApiSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    destinations: destinationApiSlice,
  },
});
