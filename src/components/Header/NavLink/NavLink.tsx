import { AnchorHTMLAttributes, FC } from "react";
import './NavLink.scss';

export const NavLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
    return <a className="nav-link" {...props}/>
}