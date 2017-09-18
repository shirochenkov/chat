import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io('http://localhost:8000');


export default function configureStore(initialState) {
    const logger = createLogger();
    const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, logger),
            applyMiddleware(socketIoMiddleware)
        )
    );


    return store;
}