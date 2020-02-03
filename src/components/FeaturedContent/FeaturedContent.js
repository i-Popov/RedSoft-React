import React from 'react';
import styles from './FeaturedContent.styles.scss';
import {Mobile, Lines, Pulse} from "../../static/images";

const FeaturedContent = () => (
    <section className={styles.ftcontent}>
        <div className={styles.ftcontent__wrapper}>
            <div>
                <img src={Lines} alt="" className={styles.ftcontent__lines}/>
            </div>
            <div className={styles.ftcontent__phone}>
                <img src={Mobile} alt=""/>
            </div>
            <div className={styles.ftcontent__text}>
                <h2>Что такое «Дневник здоровья»?</h2>
                <p>Дневник пациента — это удобный онлайн-сервис:</p>
                <ul>
                    <li>
                        Вносите результаты измерений вручную или с помощью интегрированных приборов
                    </li>
                    <li>
                        Ведите персональную медицинскую карту с историей ваших измерений
                    </li>
                    <li>
                        Делитесь результатами измерений со специалистами для повышения эффективности лечения
                    </li>
                    <li>
                        Получайте рекомендации, созданные специально для вас
                    </li>
                </ul>
                <button className={styles.ftcontent__button}>Оставить заявку</button>
            </div>
            <div className={styles.ftcontent__pulse}>
                <img src={Pulse} alt=""/>
            </div>
        </div>
    </section>
);

export default FeaturedContent;
