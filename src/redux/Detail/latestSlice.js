import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  latest: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches latest currency
export const fetchLatest = createAsyncThunk('latest/fetchLatest', async (code) => {
  // Fetch API
  const response = await axios.get(`https://api.exchangerate.host/${code}`);
  const { rates } = response.data;
  return Object.entries(rates);
});

const latestSlice = createSlice({
  name: 'latest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLatest.fulfilled, (state, action) => {
        const latestArray = action.payload;
        state.isLoading = false;
        state.latest = latestArray;
      })
      .addCase(fetchLatest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default latestSlice.reducer;
