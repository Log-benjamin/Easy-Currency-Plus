import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  converter: [],
  isLoading: false,
  error: undefined,
};

// Action creator that fetches converter currency
export const fetchconverter = createAsyncThunk('converter/fetchconverter', async (conv) => {
  // Fetch API
  const response = await axios.get(`https://api.exchangerate.host/convert?${conv}`);
  const binyamT = [response.data.result, response.data.info.rate, response.data.query.amount,
    response.data.query.from, response.data.query.to];
  return binyamT;
});

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchconverter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchconverter.fulfilled, (state, action) => {
        const converterArray = action.payload;
        state.isLoading = false;
        state.converter = converterArray;
      })
      .addCase(fetchconverter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default converterSlice.reducer;
