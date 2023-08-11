import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  euvatrate: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches euvatrate currency
export const fetcheuvatrate = createAsyncThunk('euvatrate/fetcheuvatrate', async () => {
  // Fetch API
  const response = await axios.get('https://api.exchangerate.host/vat_rates');
  const { rates } = response.data;
  return Object.entries(rates);
});

const euvatrateSlice = createSlice({
  name: 'euvatrate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetcheuvatrate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetcheuvatrate.fulfilled, (state, action) => {
        const euvatrateArray = action.payload;
        state.isLoading = false;
        state.euvatrate = euvatrateArray;
      })
      .addCase(fetcheuvatrate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default euvatrateSlice.reducer;
