import style from './header.module.css';
import Nav from '../nav/nav';
import * as React from 'react';

export const Header = () => {
    return (
        <header className={style.header}>
            <img src='/logo.jpg' className={style.header__logo} alt='logo' />
            <Nav />
            <div className={style.header__contactBlock}>
                <span className={style.header__phone}>{'+7(495)661-94-49'}</span>
                <a className={style.header__mail} href='mailto: okna-pc@mail.ru'>
                    okna-pc@mail.ru
                </a>
            </div>
        </header>
    );
};

export default Header;
