import { SERVER_SEND, SERVER_LOGS } from '../constants/Chat'
import { SET_NAME } from '../constants/Login'

export function sendMessage(message) {
    return (dispatch) => {
        dispatch({
            type: SERVER_SEND,
            payload: message
        });
    }
}

export function setLog(messages) {
    return (dispatch) => {
        dispatch({
            type: SERVER_LOGS,
            payload: messages
        });
    }
}

export function setName(name) {
    return (dispatch) => {
        dispatch({
            type: SET_NAME,
            payload: name
        });
    }
}