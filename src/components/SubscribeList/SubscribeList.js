import React from 'react';
import styles from './SubscribeList.styles.scss';
//import {Info} from "../../static/images";

const SubscribeList = () => (
    <section className={styles.sublist}>
        <div className={styles.sublist__wrapper}>
            <h2>Получите бесплатный доступ к «Дневнику здоровья»</h2>
            <h3>Оставьте свою электронную почту <br/>
            и вы узнаете о запуске данного сервиса первым!</h3>
            <form className={styles.sublist__form}>
                <input className={styles.sublist__input} type="email" placeholder="Ваш E-mail"/>
                <button className={styles.sublist__button}>Отправить</button>
            </form>
        </div>
    </section>
);

export default SubscribeList;
