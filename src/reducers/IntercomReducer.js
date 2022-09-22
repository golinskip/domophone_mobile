import { TYPE_WRITE_NUMBER, TYPE_CLEAR_NUMBER, KEYSET, TYPE_KEY_BUTTON } from '../const';

const initialState = {
    lastButton: null,
    screenState: [KEYSET.EPMTY,KEYSET.EPMTY,KEYSET.EPMTY,KEYSET.EPMTY],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case TYPE_WRITE_NUMBER:
            return {
                lastButton: action.payload,
                screenState: [
                    action.payload,
                    state.screenState[0],
                    state.screenState[1],
                    state.screenState[2]
                ],
            };
        case TYPE_CLEAR_NUMBER:
            return {
                lastButton: action.payload,
                screenState: [KEYSET.EPMTY,KEYSET.EPMTY,KEYSET.EPMTY,KEYSET.EPMTY],
            };
        case TYPE_KEY_BUTTON:
            return {
                lastButton: action.payload,
                screenState: state.screenState
            };
        default:
            return state;
    }
}
