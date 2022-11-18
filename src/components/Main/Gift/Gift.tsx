import { FC } from "react";
import './Gift.scss';

interface IGiftProps {
    name: string
    text: string
}

export const Gift: FC<IGiftProps> = ({name, text}) => {
    return <div className="gift">
        <p className="gift__name">{name}</p>
        <p className="gift__text">{text}</p>
    </div>
}