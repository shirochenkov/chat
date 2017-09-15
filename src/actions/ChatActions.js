import { SEND_MESSAGE } from '../constants/Chat'
import { SET_NAME } from '../constants/Login'

export function sendMessage(message) {
    return (dispatch) => {
        dispatch({
            type: SEND_MESSAGE,
            payload: message
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