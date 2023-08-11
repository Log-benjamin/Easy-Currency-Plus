import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetcheuvatrate } from '../../redux/Detail/eu-vat-rateSlice';
import css from './euvatrate.module.css';

const EuVatRateData = () => {
  const dispatch = useDispatch();
  const vatRate = useSelector((state) => state.euvatrate.euvatrate);
  const loading = useSelector((state) => state.euvatrate.isloading);
  const error = useSelector((state) => state.euvatrate.error);

  useEffect(() => {
    dispatch(fetcheuvatrate());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }
  return (
    <div className={css.EUVATContainer}>
      <h2>EU VAT Information</h2>
      <ul className={css.euvatul}>
        {vatRate.map((d) => (
          <li key={uuidv4()} className={css.detailEUVAT}>
            <ul>
              <li>
                Country_Name
                {' - '}
                <span>
                  {d[1].country_name}
                </span>
              </li>
              <li>
                Country_Code
                {' - '}
                <span>
                  {d[0]}
                </span>
              </li>
              <li>
                Parking_Rates
                {' - '}
                <span>
                  {d[1].parking_rates}
                </span>
              </li>
              <li>
                Standard_Rates
                {' - '}
                <span>
                  {d[1].standard_rate}
                </span>
              </li>
              <li>
                Reduced_Rates
                {' - '}
                <span>
                  {d[1].reduced_rates[0]}
                </span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EuVatRateData;
