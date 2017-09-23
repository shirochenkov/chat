import { SET_ID } from '../constants/Socket'

const initialState = {
    socketId: ''
};

export default function socketId(state = initialState, action) {
    switch (action.type) {
        case SET_ID:
            return { ...state, socketId: action.payload };

        default:
            return state;
    }
}