import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
// import User from '../components/User'
import Chat from '../components/Chat'
import * as chatActions from '../actions/chatActions'

class App extends Component {
    componentDidMount() {
        const { setLog } = this.props.chatActions;
        setLog();
    }
    render() {
        const { login, messages, socketId } = this.props;
        const { sendMessage, setName } = this.props.chatActions;

        if(!login.name)
            return <Login setName={setName} />;

        return <div className='content-wrapper'>
            {/*<User name={login.name} />*/}
            <Chat messages={messages.messages} name={login.name} socketId={socketId} sendMessage={sendMessage} />
        </div>
    }
}

function mapStateToProps (state) {
    return {
        login: state.login,
        messages: state.messages,
        socketId: state.socketId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatActions: bindActionCreators(chatActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)