import * as React from 'react';
import style from '../nav/nav.module.css';
import { arrNavNam } from '../../common/constants/constants';

export const Nav = () => {
    const [active, setActive] = React.useState(0);
    const handleClick = (id: number) => {
        setTimeout(() => setActive(id), 200);
    };
    return (
        <nav className={style.nav}>
            <ul className={style.list}>
                {arrNavNam.map((nav) => (
                    <li
                        key={nav.id}
                        className={active === nav.id ? style.listWidthBorder : style.listItem}
                        onClick={() => handleClick(nav.id)}
                    >
                        {nav.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Nav;
