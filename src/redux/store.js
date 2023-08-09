import { configureStore } from '@reduxjs/toolkit';
import symbolReducer from './Home/symbolSlice';

const store = configureStore({
  reducer: {
    symbols: symbolReducer,
  },
});

export default store;
