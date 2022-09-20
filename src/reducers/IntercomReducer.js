import TYPE_BUTTON_CLICK from '../const';
import KEYSET from '../const';

const initialState = {
    lastButton: null,
    screenState: [KEYSET.EPMTY,KEYSET.EPMTY,KEYSET.EPMTY,KEYSET.EPMTY],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case TYPE_BUTTON_CLICK:
            return {
                lastButton: action.payload,
                screenState: [
                    action.payload,
                    state.screenState[0],
                    state.screenState[1],
                    state.screenState[2]
                ],
            };

        default:
            return state;
    }
}
