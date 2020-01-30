import React from 'react';
import styles from './Header.styles.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <a href="/#">Logo</a>
            <nav className={styles.header__menu}>
                <ul className={styles.header__menu_list}>
                    <li>
                        <a className={styles.header__link} href="/">О сервисе</a>
                    </li>
                    <li>
                        <a className={styles.header__link} href="/">Функции</a>
                    </li>
                    <li>
                        <a className={styles.header__link} href="/">Возможности</a>
                    </li>
                    <li>
                        <a className={styles.header__link} href="/">Партнеры</a>
                    </li>
                </ul>
            </nav>
            <button className={styles}>Оставить заявку</button>
        </div>
    </header>
);

export default Header;
