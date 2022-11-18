import { FC } from "react";
import { Button } from "../Button";
import { Gift } from "./Gift";
import './Main.scss';

export const Main: FC = () => {
    return <main className="main">
        <div className="main__content">
            <div className="main__content-section">
                <h1 className="heading">
                    Зарабатывайте<br />
                    больше<br />
                    <span className="heading--styled">с WELBEX</span>
                </h1>
                <div className="heading-description-wrapper">
                    <p className="heading-description">
                        Развиваем и контролируем продажи за вас
                    </p>
                </div>
            </div>
            <div className="main__content-section">
                <p className="section-desc">
                    Вместе с <span className="section-desc--styled">бесплатной</span><br />
                    <span className="section-desc--styled">консультацией </span>
                    мы дарим:
                </p>
                <div className="gifts-container">
                    <Gift
                        name="Виджеты"
                        text="30 готовых решений"
                    />
                    <Gift
                        name="Dashboard"
                        text="с показателями
                        вашего бизнеса"
                    />
                    <Gift 
                        name="Skype Аудит"
                        text="отдела продаж и CRM системы"
                    />
                    <Gift 
                        name="35 дней"
                        text="использования CRM"
                    />
                </div>
                <div className="button__wrapper">
                    <Button>Получить консультацию</Button>
                </div>
            </div>
        </div>
    </main>
}