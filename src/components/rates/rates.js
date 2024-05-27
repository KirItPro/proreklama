import { useState } from "react";
import { dataSocialIcons } from "../data/data-platforms";

import "./rates.css";

export default function Rates() {
  const [isActiveInfo, setActiveInfo] = useState("rates-platforms_info");
  const [isActiveTarif, setActiveTarifo] = useState("none");
  const [isTarget, setTarget] = useState(0);
  const list = dataSocialIcons[isTarget];
  function changeBlock(e) {
    e.preventDefault();

    if (isActiveInfo !== "rates-platforms_info") {
      setTarget(Number(e.target.id));
      setActiveInfo("rates-platforms_info");
      setActiveTarifo('none')
      console.log(e.target);
    } else {
      setTarget(Number(e.target.id));      
      setActiveTarifo("rates-platforms_tarif");
      setActiveInfo("none");
      console.log(e.target);
    }
  }
  return (
    <div className="rates">
      <div className="container">
        <div className="rates-lianer">
          <h2 className="rates-lianer_title">Выбери тариф</h2>
          <div className="rates-platforms_all">
            {dataSocialIcons.map((data, i) => (
              <div className="rates-platforms" key={i+'tarif'}>
                <button className="rates-platforms_btn" onClick={changeBlock}>
                  <img
                    src={data.image}
                    className="rates-platforms_img"
                    alt="rates-icon"
                    id={data.id}
                  />
                </button>
                <div className={data.id == list.id ? isActiveInfo : "rates-platforms_info"}>
                  <h3 className="rates-platforms_info--title">{data.title}</h3>
                  <p className="rates-platforms_text">{data.text}</p>
                </div>

                <div className={data.id == list.id ? isActiveTarif : "none"}>
                  <h3 className="rates-platforms_info--title">{data.title}</h3>
                  <div className="rates-platforms_tarif--select">«Life»</div>
                  <div className="rates-platforms_tarif--select">«Сlassic»</div>
                  <div className="rates-platforms_tarif--select">«Super»</div>
                </div>

                {/* <div className="rates-platforms_tarif">
                  <h3 className="rates-platforms_info--title">{data.title}</h3>
                  <div className="rates-platforms_tarif--select">«Life»</div>
                  <div className="rates-platforms_tarif--select">«Сlassic»</div>
                  <div className="rates-platforms_tarif--select">«Super»</div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
