import { FC, ReactNode } from "react";
import classnames from 'classnames';
import './Col.scss';

interface ICol {
    name: string
    children: ReactNode[] | ReactNode
    right?: boolean
    increasedIndent?: boolean
}

export const Col: FC<ICol> = ({ children, name, right, increasedIndent }) => {
    return <div className={classnames({
        "footer__col": true,
        "footer__col--right": right
    })}>
        <p className="footer__name">{name}</p>
        <div className={classnames({
            "footer__col-links": true,
            "footer__col-links--incr-indent": increasedIndent
        })}>
            {children}
        </div>
    </div>
}