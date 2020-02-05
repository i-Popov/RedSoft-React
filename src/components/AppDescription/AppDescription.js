import React from 'react';
import styles from './AppDescription.styles.scss';
import {Phones, LinesD} from "../../static/images";

const AppDescription = () => (
    <section className={styles.appdesc}>
        <div className={styles.appdesc__wrapper}>
            <h2>Ведите персональный дневник мониторинга здоровья</h2>
            <div className={styles.appdesc__items}>
                <div className={styles.appdesc__item}>
                    <div className={styles.appdesc__about}>
                        <div className={styles.appdesc__about__number}>
                            <p>1</p>
                        </div>
                        <div className={styles.appdesc__about__text}>
                            <h3>Хранение данных</h3>
                            <p>Контролируйте и следите за динамикой изменения показателей вашего
                                здоровья. Вносите результаты измерений медицинских показателей
                                вручную или с помощью интегрированных приборов, храните историю
                                измерений и отслеживайте динамику состояния здоровья</p>
                        </div>
                    </div>
                    <div className={styles.appdesc__about}>
                        <div className={styles.appdesc__about__number}>
                            <p>2</p>
                        </div>
                        <div className={styles.appdesc__about__text}>
                            <h3>Сообщение информации врачу</h3>
                            <p>Позвольте специалисту дистанционно следить за вашим здоровьем.
                                Будьте на связи со специалистом – отправляйте информацию о своем
                                самочувствии, обменивайтесь сообщениями и получайте
                                рекомендации по вашему здоровью и лечению.</p>
                        </div>
                    </div>
                    <div className={styles.appdesc__about}>
                        <div className={styles.appdesc__about__number}>
                            <p>3</p>
                        </div>
                        <div className={styles.appdesc__about__text}>
                            <h3>Напоминание о важном</h3>
                            <p>Получайте рекомендации, созданные специально для вас.<br/>
                                Система, персонально настроенная под ваши требования,
                                автоматически напомнит о необходимости выполнить рекомендации
                                медицинского специалиста: принять препарат или выполнить измерения.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.appdesc__item}>
                    <img src={Phones} alt=""/>
                </div>
            </div>
            <div className={styles.appdesc__linesd}>
                <img src={LinesD} alt=""/>
            </div>

        </div>
    </section>
);

export default AppDescription;
