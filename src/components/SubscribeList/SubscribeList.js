import React from 'react';
import styles from './SubscribeList.styles.scss';

class SubscribeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        alert(`Ваша почта "${this.state.email}" успешно добавлена`);
        event.preventDefault();
        this.setState({
            email:''
        })
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <section className={styles.sublist}>
                <div className={styles.sublist__wrapper}>
                    <h2>Получите бесплатный доступ к «Дневнику здоровья»</h2>
                    <h3>Оставьте свою электронную почту <br/>
                    и вы узнаете о запуске данного сервиса первым!</h3>
                    <form onSubmit={this.onSubmit} className={styles.sublist__form}>
                        <input
                            className={styles.sublist__input}
                            type="email"
                            name="email"
                            required
                            placeholder={"Ваш E-mail"}
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                        <button className={styles.sublist__button} type="submit" value="Submit">Отправить</button>
                    </form>
                </div>
            </section>
        );
    }
}


export default SubscribeList;
