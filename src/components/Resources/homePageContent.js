import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HomeImg from '../../assets/17453.png';
import clacImg from '../../assets/calc.png';
import graphImg from '../../assets/graph.jpg';
import rateImg from '../../assets/download.jpg';
import monthImg from '../../assets/monthly.jpg';
import currhistory from '../../assets/currency-history.jpg';
import tipsImg from '../../assets/Tips.png';

const HomePageContent = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const letter = /^[A-Za-z]+$/;
    if (search.length === 3 && search.match(letter)) {
      navigate(`/details/${search.toUpperCase()}`);
    }
  };
  return (
    <>
      <div className="homeTop-container">
        <img src={HomeImg} className="image-home" alt="homeImg" />
        <div className="currency-Container">
          <div className="conv-Gra-Rat">
            <div>
              <i className="facaret-one fa-solid fa-caret-down fa-2xl" />
              <p>CURRENCY CONVERTER</p>
              <img src={clacImg} className="calcImg" alt="calcImg" />
            </div>
            <div>
              <i className="facaret-two fa-solid fa-caret-down fa-2xl" />
              <p>GRAPHS</p>
              <img src={graphImg} className="graphImg" alt="graphImg" />
            </div>
            <div>
              <i className="facaret-three fa-solid fa-caret-down fa-2xl" />
              <p>RATES TABLES</p>
              <img src={rateImg} className="ratesImg" alt="rateImg" />
            </div>
          </div>
          <div className="Avg-His">
            <div>
              <i className="facaret-four fa-solid fa-caret-down fa-2xl" />
              <p>MONTHLY AVERAGE</p>
              <img src={monthImg} className="monthlyImg" alt="monthlyImg" />
            </div>
            <div>
              <i className="facaret-five fa-solid fa-caret-down fa-2xl" />
              <p>CURRENCY HISTORY</p>
              <img src={currhistory} className="currHistoryImg" alt="currHistoryImg" />
            </div>
            <div className="money-transfer-tips">
              <i className="facaret-six fa-solid fa-caret-down fa-2xl" />
              <p>MONEY TRANSFER TIPS</p>
              <img src={tipsImg} className="tipsImg" alt="tipsImg" />
            </div>
          </div>
        </div>
      </div>
      <form className="homeSearchForm" onSubmit={(e) => { e.preventDefault(); handleSubmit(search); }}>
        <input placeholder="Enter Currency code ..." onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type="button" onClick={(e) => { e.preventDefault(); handleSubmit(search); }}> SEARCH </button>
      </form>
    </>
  );
};

export default HomePageContent;
