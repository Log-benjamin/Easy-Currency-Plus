import HomeImg from '../assets/17453.png';
import clacImg from '../assets/calc.png';
import graphImg from '../assets/graph.jpg';
import rateImg from '../assets/download.jpg';
import monthImg from '../assets/monthly.jpg';
import currhistory from '../assets/currency-history.jpg';
import tipsImg from '../assets/Tips.png';
import SupportedSymbols from './DisplaySymbol';

export default function Home() {
  return (
    <>
      <div className="homeTop-container">
        <img src={HomeImg} className="image-home" alt="homeImg" />
        <div className="currency-Container">
          <form>
            <input className="" placeholder="Looking for ...." />
            <button type="button">Search</button>
          </form>
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
            <div>
              <i className="facaret-six fa-solid fa-caret-down fa-2xl" />
              <p>MONEY TRANSFER TIPS</p>
              <img src={tipsImg} className="tipsImg" alt="tipsImg" />
            </div>
          </div>
        </div>
      </div>
      <SupportedSymbols />
    </>
  );
}
