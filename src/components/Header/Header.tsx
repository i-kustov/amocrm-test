import { FC } from "react";
import { NavLink } from "./NavLink";
import './Header.scss';

import logo from '../../assets/header-logo.svg';
import phone from '../../assets/phone.svg';
import telegram from '../../assets/telegram.svg';
import whatsapp from '../../assets/whatsapp.svg';

export const Header: FC = () => {
    return <header className="header">
        <div className="logo__container">
            <img className="logo" src={logo} alt="" />
            <p className="logo__description">крупный интегратор CRM<br />в Росcии и ещё 8 странах</p>
        </div>
        <nav className="header__nav">
            <NavLink href="#">Услуги</NavLink>
            <NavLink href="#">Виджеты</NavLink>
            <NavLink href="#">Интеграции</NavLink>
            <NavLink href="#">Кейсы</NavLink>
            <NavLink href="#">Сертификаты</NavLink>
        </nav>
        <div className="header__contacts">
            <span className="phone">+7 555 555-55-55</span>
            <div className="header__icons">
                <img src={telegram} alt="" />
                <img src={phone} alt="" />
                <img src={whatsapp} alt="" />
            </div>
        </div>
    </header>
}