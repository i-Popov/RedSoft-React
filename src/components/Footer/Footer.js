import React from 'react';
import styles from './Footer.styles.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__wrapper}>
            <div className={styles.footer__menus}>
                <a href="/#" className={styles.footer__logo} title="logo"> </a>
                <nav className={styles.footer__menu}>
                    <ul className={styles.footer__menu_list}>
                        <li>
                            <a className={styles.footer__link} href="/">О сервисе</a>
                        </li>
                        <li>
                            <a className={styles.footer__link} href="/">Функции</a>
                        </li>
                        <li>
                            <a className={styles.footer__link} href="/">Возможности</a>
                        </li>
                        <li>
                            <a className={styles.footer__link} href="/">Специалистам</a>
                        </li>
                        <li>
                            <a className={styles.footer__link} href="tel:88005004549">88005004549</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.footer__copyright}>
                <span>
                    Разработка сайта <a href="https://redsoft.ru/" target="_blank" rel="noopener noreferrer">Redsoft</a>
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;
