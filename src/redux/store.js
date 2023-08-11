import { configureStore } from '@reduxjs/toolkit';
import symbolReducer from './Home/symbolSlice';
import latestReducer from './Detail/latestSlice';
import converterReducer from './Detail/convertCurrencySlice';
import euvatrateReducer from './Detail/eu-vat-rateSlice';
import historicalReducer from './Detail/historicalRateSlice';

const store = configureStore({
  reducer: {
    symbols: symbolReducer,
    latest: latestReducer,
    converter: converterReducer,
    euvatrate: euvatrateReducer,
    historical: historicalReducer,
  },
});

export default store;
