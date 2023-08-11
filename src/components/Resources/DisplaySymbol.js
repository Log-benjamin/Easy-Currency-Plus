import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsymbols } from '../../redux/Home/symbolSlice';

const SupportedSymbols = () => {
  const dispatch = useDispatch();
  const Symbol = useSelector((state) => state.symbols.symbols);
  const loading = useSelector((state) => state.symbols.isloading);
  const error = useSelector((state) => state.symbols.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchsymbols());
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

  const handlClick = (code) => {
    navigate(`/details/${code}`);
  };
  return (
    <>
      <h1 className="base-curr">
        Country Currency and Code
      </h1>
      <div className="uro-ul">
        {Symbol.map((d) => (
          <button
            key={(d[1].code)}
            id={(d[1].code)}
            type="button"
            className="detail-li"
            onClick={(e) => { e.preventDefault(); handlClick(e.target.id); }}
          >
            <span className="symbole-code">{d[1].code}</span>
            {' '}
            -
            {' '}
            {d[1].description}
          </button>
        ))}
      </div>
    </>
  );
};

export default SupportedSymbols;
