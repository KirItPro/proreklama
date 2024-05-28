
import "./modal.css";

export default function Modal() {

  return (
    <div className="modal" >
      <div className="container">
        <div className="modal-inner" >
          <div className="modal-inner__user">Ivan</div>
          <ul className="modal-inner__list">
            <li>Покупки</li>
            <li>Кошелек</li>
            <li>Скидка</li>
            <li>Способы оплаты</li>
            <li>Оферта</li>
            <li>Обращения</li>
            <li>Настройки</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
