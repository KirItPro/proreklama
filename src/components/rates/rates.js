import { useState } from "react";
import { dataSocialIcons } from "../data/data-platforms";

import "./rates.css";

export default function Rates() {
  const [modal, setModal] = useState(false);
  const [isTarget, setTarget] = useState(0);
  const list = dataSocialIcons[isTarget];
  function changeBlock(e) {
    e.preventDefault();
    setTarget(Number(e.target.id));
    if (modal) {
      setModal(false)
    }else {
      setModal(true)
    }
  }
  return (
    <div className="rates">
      <div className="container">
        <div className="rates-lianer">
          <h2>Выбери тариф</h2>
          <div className="rates-platforms_all">
            {dataSocialIcons.map((data, i) => (
              <div className="rates-platforms" key={i + "tarif"}>
                <button className="rates-platforms_btn" onClick={changeBlock}>
                  <img
                    src={data.image}
                    className="rates-platforms_img"
                    alt="rates-icon"
                    id={data.id}
                  />
                </button>
                {modal && data.id === list.id ? (
                  <div className="rates-platforms_tarif">
                    <h3 className="rates-platforms_info--title">{data.title}</h3>
                    <div className="rates-platforms_tarif--select">«Life»</div>
                    <div className="rates-platforms_tarif--select">«Сlassic»</div>
                    <div className="rates-platforms_tarif--select">«Super»</div>
                  </div>
                ) : (
                  <div className="rates-platforms_info">
                    <h3 className="rates-platforms_info--title">{data.title}</h3>
                    <p className="rates-platforms_text">{data.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
