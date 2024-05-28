import { useEffect, useState } from "react";
import AVA from "../../images/user/ava.png";
import BOX from "../../images/user/box.png";
import PERCENT from "../../images/user/percent.png";

import "./user.css";

export default function User({dataUsers}) {
  
  // const [allData, setAllData] = useState(null);
  const obj = Object.create(dataUsers);

  // useEffect(()=> {
    // dataUsers ? Object.create() : console.log('поиск данных');
    dataUsers ? console.log(obj) : console.log('.......');
  // },[dataUsers])

  return (
    <div className="user">
      <div className="container">
        <div className="user-inner">
          <h2>Профиль заказчика</h2>

          <div className="user-inner_first-part">
            <div className="first-part--block">
              <img src={AVA} className="first-part--block__icon" alt="ava" />
              <i className="first-part--block__text">{dataUsers ? obj.first_name : '...'}</i>
              <div className="first-part--block__num">+7 900 000 00 00</div>
            </div>
            <div className="first-part--block">
              <img src={BOX} className="first-part--block__icon" alt="box" />
              <i className="first-part--block__text">Покупки</i>
            </div>
            <div className="first-part--block">
              <img src={PERCENT} className="first-part--block__icon" alt="percent" />
              <i className="first-part--block__text">Скидка</i>
            </div>
          </div>

          <div className="user-inner_second-part">
            <div className="second-part--block">
              <div className="second-part--block__text">Способы оплаты</div>
              <div className="second-part--block__cart">***1883</div>
            </div>
            <div className="second-part--block">
              <div className="second-part--block__text">Баланс</div>
              <div className="second-part--block__cart">{dataUsers ? obj.wallet_balance : '...'}</div>
            </div>
            <div className="second-part--block">
              <div className="second-part--block__text">рейтинг {dataUsers ? obj.rating : '...'}</div>
            </div>
            <div className="second-part--block">
              <div className="second-part--block__text">Обращения</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
