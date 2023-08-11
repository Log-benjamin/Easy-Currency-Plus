import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchhistorical } from '../../redux/Detail/historicalRateSlice';
import css from './historicalRate.module.css';

const HistoricalRate = () => {
  const date = moment().format('YYYY-MM-DD');
  const dispatch = useDispatch();
  const HistoryRate = useSelector((state) => state.historical.historical);
  const loading = useSelector((state) => state.historical.isloading);
  const error = useSelector((state) => state.historical.error);
  const { symbol } = useParams();
  const [checkdate, setCheckDate] = useState();
  const [conv, setConv] = useState();

  useEffect(() => {
    if (conv === null) {
      setConv('2023-08-10');
    }
    dispatch(fetchhistorical(conv));
  }, [dispatch, conv]);

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
  const handlSubmit = () => {
    setConv(`${checkdate}?base=${symbol}`);
  };
  return (
    <div className={css.historycontainer}>
      <h2>Historical Rate</h2>
      <form onSubmit={(e) => { e.preventDefault(); handlSubmit(checkdate); }}>
        <input
          placeholder={date}
          onChange={(e) => setCheckDate(e.target.value)}
          value={checkdate}
        />
        <div className={css.btn2}>
          <button type="button" onClick={(e) => { e.preventDefault(); handlSubmit(checkdate); }}> SEARCH </button>
        </div>
      </form>
      <p className={css.descrip}>
        1
        {' '}
        {symbol}
        {' '}
        rate in
        {' - '}
        {' '}
        {checkdate}
      </p>
      <ul>
        {HistoryRate.map((d) => (
          <li key={uuidv4()}>
            {d[1]}
            {' '}
            -
            {' '}
            {d[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricalRate;
