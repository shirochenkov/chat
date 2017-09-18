import { SEND_MESSAGE, GET_ALL_MESSAGES } from '../constants/Chat';

const initialState = {
    messages: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return { ...state, messages: [ ...state.messages, action.payload ] };

        case GET_ALL_MESSAGES:
            return { ...state, messages: [ ...state.messages, ...action.payload ] };

        default:
            return state;
    }
}

