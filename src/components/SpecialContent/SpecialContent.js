import React from 'react';
import styles from './SpecialContent.styles.scss';
import {Info} from "../../static/images";

const SpecialContent = () => (
    <section className={styles.spcontent}>
        <div className={styles.spcontent__wrapper}>
            <div className={styles.spcontent__info}>
                <img src={Info} alt=""/>
            </div>
            <div className={styles.spcontent__text}>
                <h2>Специалистам</h2>
                <ul>
                    <li>
                        Дистанционный контроль состояния здоровья ваших пациентов
                    </li>
                    <li>
                        Наблюдение за динамикой изменения основных<br/>
                        медицинских показателей
                    </li>
                    <li>
                        Наличие алгоритмов автоматического анализа<br/>
                        поступающей информации
                    </li>
                    <li>
                        Индивидуальная система уведомлений об изменении<br/>
                        состояния каждого пациента
                    </li>
                    <li>
                        Дополнительный сервис коммуникации, позволяющий активно
                        вовлекать пациента в процесс профилактики, лечения и реабилитации.
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

export default SpecialContent;
