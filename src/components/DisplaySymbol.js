import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsymbols } from '../redux/Home/symbolSlice';

const SupportedSymbols = () => {
  const dispatch = useDispatch();
  const Symbol = useSelector((state) => state.symbols.symbols);
  const loading = useSelector((state) => state.symbols.isloading);
  const error = useSelector((state) => state.symbols.error);

  useEffect(() => {
    if (Symbol.length === 0) {
      dispatch(fetchsymbols());
    }
  }, [dispatch, Symbol.length]);

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
      <h1 className="base-curr">
        Currency Symbols
      </h1>
      <div className="Symbols-Container">
        <ul className="uro-ul">
          {Symbol.map((d) => (
            <li key={d[1].code} className="detail-li">
              <span className="symbole-code">{d[1].code}</span>
              {' '}
              -
              {' '}
              {d[1].description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SupportedSymbols;
