import img1 from '../../assets/currencyexchange101.png';
import img2 from '../../assets/fraud_prevention.png';
import img3 from '../../assets/identifying_fraud.png';
import img4 from '../../assets/exchange_tips.png';
import img5 from '../../assets/currencies_fluctuate.png';
import css from './moneyTransfertips.module.css';

const MoneyTips = () => (
  <div className={css.moneytipContainer}>
    <h2>
      $$$ Money Transfer & Currency Tips $$$
    </h2>
    <div className={css.firstrow}>
      <div className={css.currexch101}>
        <div>
          <h3>
            Currency Exchange 101
          </h3>
          <p>
            Before you send a money transfer or exchange your foreign currency,
            read this basic introduction to currency exchange.This easy-to-read
            infographic includes information on the foreign exchange market, currency pairs,
            buy and sell rates, as well as foreign exchange costs.
          </p>
        </div>
        <img src={img1} alt="img1" />
      </div>
      <div className={css.Fraudprev}>
        <img src={img2} alt="img2" />
        <h3>Fraud Prevention</h3>
        <p>
          The best defense against theft and fraud is knowledge.
          Learn how you can protectyourself against the scammers.
        </p>
      </div>
    </div>
    <div className={css.secondrow}>
      <div className={css.fraudScams}>
        <div>
          <h3>
            Identifying Types of Fraud/Scams
          </h3>
          <p>
            Criminals are always coming up with new and innovative ways to trick
            you out of your money. Learn about some of the scams that are out there
            and how to watch out for them!
          </p>
        </div>
        <img src={img3} alt="img3" />
      </div>
      <div className={css.fivetips}>
        <div>
          <h3>
            5 Tips for Currency Exchange
          </h3>
          <p>
            Avoid the pitfalls of exchanging foreign currency. These five easy tips can
            help save you money and time on money transfers and currency transactions.
          </p>
        </div>
        <img src={img4} alt="img2" />
      </div>
    </div>
    <div className={css.thirdrow}>
      <div className={css.whyFluc}>
        <div>
          <h3>
            Why Do Currencies Fluctuate?
          </h3>
          <p>
            Find out what factors cause currency rates to fluctuate.
            This article covers monetary policies, inflation rates,
            and political and economic conditions.
          </p>
        </div>
        <img src={img5} alt="img5" />
      </div>
    </div>
  </div>
);

export default MoneyTips;
