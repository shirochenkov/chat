import { combineReducers } from 'redux'
import login from './login'
import messages from './messages'
import socketId from './socketId'

export default combineReducers({
    login,
    messages,
    socketId
})