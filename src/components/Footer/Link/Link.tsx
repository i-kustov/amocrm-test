import { AnchorHTMLAttributes, FC } from "react";
import './Link.scss';

export const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
    return <a className="footer__link" {...props} />
}