import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatest } from '../redux/Detail/latestSlice';
import CurrencyConverter from './Resources/Converter';
import EuVatRateData from './Resources/EuVatRate';
import HistoricalRate from './Resources/HistoryRate';
import MoneyTips from './Resources/moneyTransfertips';
import css from './Resources/latestCurr.module.css';

const LatestCurrency = () => {
  const dispatch = useDispatch();
  const latestCurr = useSelector((state) => state.latest.latest);
  const loading = useSelector((state) => state.latest.isloading);
  const error = useSelector((state) => state.latest.error);
  const { symbol } = useParams();

  const benji = `latest?base=${symbol}`;
  useEffect(() => {
    dispatch(fetchLatest(benji));
  }, [dispatch, benji]);
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
    <>
      <Link to={`/details/${symbol}`}>
        <div className={css.topcontainer}>
          <div className={css.latestcontainer}>
            <h2>
              Latest Currency Rate - 1
              {' '}
              {symbol}
            </h2>
            <ul>
              {latestCurr.map((d) => (
                <li key={d[0]}>
                  {d[1]}
                  {' '}
                  -
                  {' '}
                  {d[0]}
                </li>
              ))}
            </ul>
          </div>
          <CurrencyConverter />
        </div>
        <div className={css.topcontainer}>
          <EuVatRateData />
          <HistoricalRate />
        </div>
        <MoneyTips />
      </Link>
    </>
  );
};

export default LatestCurrency;
