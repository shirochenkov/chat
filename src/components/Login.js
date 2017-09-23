import React, { Component } from 'react'

export default class Login extends Component {
    sendMyName(e) {
        e.preventDefault();
        let nick = this.textInput.value;
        if(nick) {
            this.props.setName(nick);
        }
    }
    componentDidMount() {
        this.textInput.focus();
    }
    render() {
        return <div className='login'>
            <form onSubmit={::this.sendMyName}>
                <h3 className='login__title'>
                    Your nickname
                </h3>
                <input
                    className='login__input'
                    type='text'
                    ref={(input) => { this.textInput = input; }}
                />
            </form>
        </div>
    }
}