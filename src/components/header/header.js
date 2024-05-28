import { Link } from 'react-router-dom';
import LOGO from '../../images/Logo.png'

import './header.css';

export default function Header () {
    return(
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <img src={LOGO} className='header-img' alt='logo'/>
                    <Link to='/proreklama' className="header-promo"><span className="header-pro">pro</span>reklama</Link>
                    <nav className='header-navigation'>
                        <div className='header-navigation__btn'>поддержка</div>
                        <div className='header-navigation__btn'>авторизация</div>
                        <div className='header-navigation__btn'>новости</div>
                    </nav>
                    <Link to ='/user'className='header-login'>войти</Link>
                </div>
            </div>
        </header>
    )
}