const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'KEY_CLICK':
            return action.payload;

        default:
            return state;
    }
}
