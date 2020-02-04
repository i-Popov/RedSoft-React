import React from 'react';
import styles from './Slider.styles.scss';
import Slider from "react-slick";
import {SliderLines} from "../../static/images";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        arrows: false,
    };
    return (
        <section className={styles.slider}>
            <div className={styles.slider__wrapper}>
                <div className={styles.slider__lines}>
                    <img src={SliderLines} alt=""/>
                </div>
                <Slider {...settings}>
                    <div>
                        <h2 className={styles.slider__title}>Расширяем возможности предоставления <br/>
                        качественных медицинских услуг</h2>
                        <h3 className={styles.slider__subtitle}>«Дневник здоровья» – новый сервис для самоконтроля <br/>
                        показателей состояния здоровья, разработанный для <br/>
                        участников программы «Мое здоровье».</h3>
                        <button className={styles.slider__button}>Узнать больше</button>
                    </div>
                    <div>
                        <h2 className={styles.slider__title}>Расширяем возможности предоставления <br/>
                            качественных медицинских услуг</h2>
                        <h3 className={styles.slider__subtitle}>«Дневник здоровья» – новый сервис для самоконтроля <br/>
                            показателей состояния здоровья, разработанный для <br/>
                            участников программы «Мое здоровье».</h3>
                        <button className={styles.slider__button}>Узнать больше</button>
                    </div>
                </Slider>
            </div>
        </section>
    );
};
export default Carousel;
