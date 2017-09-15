import React, { PropTypes, Component } from 'react'

export default class Chat extends Component {
    sendMyMessage() {
        let { name } = this.props;
        this.props.sendMessage({
            from: name,
            msg: this.textInput.value
        });

        this.textInput.value = '';
    }
    render() {
        const { messages } = this.props;

        return <div>
            <div style={{overflowY: 'auto', height: '100px'}}>
                {
                    messages.map((msg, index) => {
                        return <p key={index}>{msg.from}: {msg.msg}</p>
                    })
                }
            </div>

            <div>
                <input
                    type='text'
                    ref={(input) => { this.textInput = input; }}
                />
                <button onClick={::this.sendMyMessage}>Отправить</button>
            </div>
        </div>
    }
}

Chat.propTypes = {
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired
};