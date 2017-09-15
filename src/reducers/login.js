import { SET_NAME } from '../constants/Login'

const initialState = {
    name: ''
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };

        default:
            return state;
    }
}