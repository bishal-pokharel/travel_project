import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetcher } from '../api'; // Adjust path to your fetcher function
import { API_URLS } from '../api/url'; // Adjust path to your API URLs

// Async Thunk for fetching data
export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async () => {
    const response = await fetcher(API_URLS.DESTINATIONS);
    return response;
  }
);

// Slice
const destinationSlice = createSlice({
  name: 'destinations',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default destinationSlice.reducer;
