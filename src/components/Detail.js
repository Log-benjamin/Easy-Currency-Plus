import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CurrencyConverter from './Resources/Converter';
import EuVatRateData from './Resources/EuVatRate';
import HistoricalRate from './Resources/HistoryRate';
import MoneyTips from './Resources/moneyTransfertips';
import LatestCurrency from './Resources/latestCurrency';
import css from './Resources/latestCurr.module.css';

const Details = () => {
  const { symbol } = useParams();
  return (
    <>
      <Link to={`/details/${symbol}`}>
        <div className={css.topcontainer}>
          <LatestCurrency />
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

export default Details;
