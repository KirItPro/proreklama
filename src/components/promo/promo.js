import PROMO from "../../images/girl-promo.png";

import "./promo.css";
export default function Promo() {
  return (
    <div className="promo">
      <div className="container">
        <div className="promo__inner">
          <img src={PROMO} className="promo-img" alt="promo" />
          <div className="promo-content">
            <div>
            <h1 className="promo-title">
              <span className="promo-pro">pro</span>reklama
            </h1>
            <p className="promo-text">
              Рекламный рынок постоянно растёт. По оценке коммуникационной
              группы , в 2021 году объём мирового рынка рекламы
              составил 682,5 млрд долларов, а в 2022 году этот показатель
              достигнет 745 млрд долларов. Нас окружает огромное количество
              рекламных сообщений — по разным оценкам, человек видит до четырёх
              тысяч объявлений в день.              Рекламный рынок постоянно растёт. По оценке коммуникационной
              группы , в 2021 году объём мирового рынка рекламы
              составил 682,5
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
