import style from './header.module.css';

export const Header = () => {
    return (
        <header className={style.header}>
            <div>
                {'Logo'}
            </div>
            <h1 className={style.title}>
                {'Okna Premium Class'}
            </h1>
            <div className={style.header__contactBlock}>
                <span className={style.header__phone}>{'+7(495)661-94-49'}</span>
                <a className={style.header__mail}  href="mailto: okna-pc@mail.ru">okna-pc@mail.ru</a>
            </div>
        </header>

    )

};

export default Header;