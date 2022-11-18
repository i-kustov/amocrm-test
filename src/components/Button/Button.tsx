import { ButtonHTMLAttributes, FC } from "react";
import './Button.scss';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return <button className="button" {...props} />
}