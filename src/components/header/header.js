import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../images/Logo.png";

import "./header.css";
import Modal from "../modal/modal";

export default function Header() {
  const [modal, setModal] = useState(false);
  function setTrue(){
      console.log('true')
      setModal(true)
  }
  function setFalse(){
    console.log('false')
    setModal(false)
}
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <img src={LOGO} className="header-img" alt="logo" />
          <Link to="/proreklama" className="header-promo">
            <span className="header-pro">pro</span>reklama
          </Link>
          <nav className="header-navigation">
            <Link to='/support' className="header-navigation__btn">поддержка</Link>
            <Link to="/news" className="header-navigation__btn">
              новости
            </Link>
          </nav>
          <Link to="/user" className="header-login" onPointerEnter={setTrue} onPointerOut={setFalse}>
            профиль
          </Link>
        </div>
        {
          modal ? <Modal /> : console.log('убрал')
        }
      </div>
    </header>
  );
}
