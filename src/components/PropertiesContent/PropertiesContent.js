import React from 'react';
import styles from './PropertiesContent.styles.scss';

import {Medic, Siren, Conversation, Facebook, Health, Smartwatch} from "../../static/images";

const PropertiesContent = () => (
    <section className={styles.ptcontent}>
        <div className={styles.ptcontent__wrapper}>
            <h2>Функции приложения</h2>
            <div className={styles.ptcontent__items}>
                <div className={styles.ptcontent__item}>
                    <img className={styles.ptcontent__item_img} src={Medic} alt=""/>
                    <p>Планирование графика <br/>приема лекарств</p>
                </div>
                <div className={styles.ptcontent__item}>
                    <img className={styles.ptcontent__item_img} src={Siren} alt=""/>
                    <p>Уведомление врача <br/>об исполнении назначений</p>
                </div>
                <div className={styles.ptcontent__item}>
                    <img className={styles.ptcontent__item_img} src={Health} alt=""/>
                    <p>Ведение дневника <br/>самочувствия</p>
                </div>
                <div className={styles.ptcontent__item}>
                    <img className={styles.ptcontent__item_img} src={Smartwatch} alt=""/>
                    <p>Удаленное предоставление <br/>измерений врачу</p>
                </div>
                <div className={styles.ptcontent__item}>
                    <img className={styles.ptcontent__item_img} src={Conversation} alt=""/>
                    <p>Общение с врачами <br/>через встроенный мессенджер</p>
                </div>
                <div className={styles.ptcontent__item}>
                    <img className={styles.ptcontent__item_img} src={Facebook} alt=""/>
                    <p>Получение уведомлений <br/>для выполнения назначений</p>
                </div>
            </div>
        </div>
    </section>
);

export default PropertiesContent;
