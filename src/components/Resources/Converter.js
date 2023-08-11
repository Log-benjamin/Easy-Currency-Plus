import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchconverter } from '../../redux/Detail/convertCurrencySlice';
import css from './converter.module.css';

const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const convertCurr = useSelector((state) => state.converter.converter);
  const loading = useSelector((state) => state.converter.isloading);
  const error = useSelector((state) => state.converter.error);
  const { symbol } = useParams();
  const [amount, setAmount] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [conv, setConv] = useState();

  useEffect(() => {
    dispatch(fetchconverter(conv));
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
  const handlthis = () => {
    setConv(`from=${symbol}&to=${toCurrency}&amount=${amount}`);
    setAmount('');
    setToCurrency('');
  };
  return (
    <div className={css.curconvform}>
      <form onSubmit={(e) => { e.preventDefault(); handlthis(amount, toCurrency); }}>
        <h2 className={css.currh2}>Currency Converter</h2>
        <input id="input-amount" placeholder="$ Amount ..." onChange={(e) => setAmount(e.target.value)} value={amount} />
        <input id="input-to-currency" placeholder="To ..." onChange={(e) => setToCurrency(e.target.value)} value={toCurrency} />
        <div>
          <button type="button" onClick={(e) => { e.preventDefault(); handlthis(amount, toCurrency); }}>Convert</button>
        </div>
      </form>
      <div key={uuidv4()} className={css.convertedresult}>
        <p className={css.excharatevalue}>
          Rate
          {'  '}
          {' - '}
          {convertCurr[1]}
        </p>
        <p>
          {convertCurr[2]}
          {' '}
          <span>
            {symbol}
          </span>
          {' '}
          =
        </p>
        <p>
          {convertCurr[0]}
          {' '}
          <span>
            {convertCurr[4]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
