import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  historical: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches historical currency
export const fetchhistorical = createAsyncThunk('historical/fetchhistorical', async (conv) => {
  // Fetch API
  const response = await axios.get(`https://api.exchangerate.host//fluctuation${conv}`);
  const { rates } = response.data;
  return Object.entries(rates);
});

const historicalSlice = createSlice({
  name: 'historical',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchhistorical.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchhistorical.fulfilled, (state, action) => {
        const historicalArray = action.payload;
        state.isLoading = false;
        state.historical = historicalArray;
      })
      .addCase(fetchhistorical.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default historicalSlice.reducer;
