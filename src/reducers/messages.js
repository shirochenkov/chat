import { SEND_MESSAGE } from '../constants/Chat';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

// socket.on('timer', timestamp => cb(null, timestamp));

const initialState = {
    messages: []
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            socket.emit('send', action.payload);
            socket.on('msg', (msg) => {
                console.log(msg);
                return { ...state, messages: [ ...state.messages, msg ] };
            });
            return { ...state, messages: [ ...state.messages, action.payload ] };

        default:
            return state;
    }
}

