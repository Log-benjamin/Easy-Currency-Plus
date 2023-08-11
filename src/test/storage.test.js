import { configureStore } from '@reduxjs/toolkit';
import symbolReducer from '../redux/Home/symbolSlice';
import latestReducer from '../redux/Detail/latestSlice';
import converterReducer from '../redux/Detail/convertCurrencySlice';
import euvatrateReducer from '../redux/Detail/eu-vat-rateSlice';
import historicalReducer from '../redux/Detail/historicalRateSlice';

describe('Redux Store', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        symbols: symbolReducer,
        latest: latestReducer,
        converter: converterReducer,
        euvatrate: euvatrateReducer,
        historical: historicalReducer,
      },
    });
  });

  it('should have the correct initial state', () => {
    const initialState = store.getState();
    expect(initialState).toEqual({
      symbols: symbolReducer(undefined, {}),
      latest: latestReducer(undefined, {}),
      converter: converterReducer(undefined, {}),
      euvatrate: euvatrateReducer(undefined, {}),
      historical: historicalReducer(undefined, {}),
    });
  });
});
