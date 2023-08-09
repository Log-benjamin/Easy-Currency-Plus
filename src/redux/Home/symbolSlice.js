import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  symbols: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches symbols currency
export const fetchsymbols = createAsyncThunk('symbols/fetchsymbols', async (thunkAPI) => {
  try {
    // Fetch API
    const response = await axios.get('https://api.exchangerate.host/symbols');
    const data = Object.entries(response.data.symbols);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`There was an error: ${error}`);
  }
});

const symbolSlice = createSlice({
  name: 'symbols',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchsymbols.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchsymbols.fulfilled, (state, action) => {
        const symbolsArray = action.payload;
        state.isLoading = false;
        state.symbols = symbolsArray;
      })
      .addCase(fetchsymbols.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default symbolSlice.reducer;
