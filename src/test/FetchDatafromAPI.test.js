import euvatrateReducer, { fetcheuvatrate } from '../redux/Detail/eu-vat-rateSlice';

describe('testing euvatrateReducer', () => {
  it('should set isLoading to false and contents to the fetched data when fetchContinents.fulfilled is called', () => {
    const initialState = {
      euvatrate: [],
      isLoading: false,
      error: undefined,
    };
    const data = [{
      Country_Code: 'USD', Country_Name: 'United states of America', Parking_Rates: 10, Standard_Rates: 15,
    }];
    const action = { type: fetcheuvatrate.fulfilled.type, payload: data };
    const expectedState = {
      euvatrate: data,
      isLoading: false,
      error: undefined,
    };
    expect(euvatrateReducer(initialState, action)).toEqual(expectedState);
  });
});
