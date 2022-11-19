import { FC } from "react";
import { Col } from "./Col";
import { Link } from "./Link";
import './Footer.scss';

import telegram from '../../assets/telegram.svg';
import phone from '../../assets/phone.svg';
import whatsapp from '../../assets/whatsapp.svg';

export const Footer: FC = () => {
    return <footer className="footer">
        <div className="footer__content">
            <Col name="О компании">
                <Link>Партнерская программа</Link>
                <Link>Вакансия</Link>
            </Col>
            <Col name="Меню">
                <Link>Расчёт стоимости</Link>
                <Link>Услуга</Link>
                <Link>Виджеты</Link>
                <Link>Интеграции</Link>
                <Link>Наши клиенты</Link>
                <Link>Кейсы</Link>
                <Link>Благодарственные письма</Link>
                <Link>Сертификаты</Link>
                <Link>Блог на Youtube</Link>
                <Link>Вопрос / Ответ</Link>
            </Col>
            <Col name="Контакты" right increasedIndent>
                <Link>+7 555 555-55-55</Link>
                <div className="footer__icons">
                    <img src={telegram} alt="" />
                    <img src={phone} alt="" />
                    <img src={whatsapp} alt="" />
                </div>
                <Link>Москва, Путевой проезд 3с1, к 902</Link>
            </Col>
        </div>
        <div className="footer__copyright">
            <p className="footer__copyright-text">©WELBEX 2022. Все права защищены.</p>
            <a className="footer__copyright-link" href="#">Политика конфиденциальности</a>
        </div>
    </footer>
}