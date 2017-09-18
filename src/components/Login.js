import React, { Component } from 'react'

export default class Login extends Component {
    sendMyName() {
        this.props.setName(this.textInput.value);
    }
    render() {
        return <div>
            Ваше имя:
            <input
                type='text'
                defaultValue='Гость'
                ref={(input) => { this.textInput = input; }}
            />
            <button onClick={::this.sendMyName}>
                Войти
            </button>
        </div>
    }
}