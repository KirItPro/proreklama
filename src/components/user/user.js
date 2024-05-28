import AVA from "../../images/user/ava.png";
import BOX from "../../images/user/box.png";
import PERCENT from "../../images/user/percent.png";

import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="container">
        <div className="user-inner">
          <h2>Профиль</h2>

          <div className="user-inner_first-part">
            <div className="first-part--block">
              <img src={AVA} className="first-part--block__icon" alt="ava" />
              <i className="first-part--block__text">Александр</i>
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
              <div className="second-part--block__cart">1000 P</div>
            </div>
            <div className="second-part--block">
              <div className="second-part--block__text">Способы оплаты</div>
            </div>
            <div className="second-part--block">
              <div className="second-part--block__text">Способы оплаты</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
