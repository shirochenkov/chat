import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'

export default class Chat extends Component {
    sendMyMessage(e) {
        e.preventDefault();

        let text = this.textInput.value;
        if(text) {
            let { name } = this.props;
            this.props.sendMessage({
                from: name,
                msg: text
            });

            this.textInput.value = '';
        }
    }
    scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: 'smooth' });
    };
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        const { messages, socketId } = this.props;

        return <div className='chat'>
            <div className='char__wrapper'>
                <div className='chat__messages'>
                    {

                        messages.map((msg, index) => {
                            let messegeType = 'chat__message';
                            if(msg.socketId === socketId.socketId) {
                                messegeType += ' chat__message_mine';
                            }
                            return <div className={messegeType} key={index}>
                                <span className='chat__message-content'>
                                    <div className='chat__message-from'>{msg.from}</div>
                                    {msg.msg}
                                </span>
                            </div>
                        })
                    }
                    <div style={{ clear: "both" }}
                         ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
            </div>
            <form onSubmit={::this.sendMyMessage} className='chat__send-messages-form'>
                <input
                    className='chat__send-messages'
                    type='text'
                    ref={(input) => { this.textInput = input; }}
                />
            </form>
        </div>
    }
}

Chat.propTypes = {
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired
};