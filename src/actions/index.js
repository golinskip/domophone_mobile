import ACTION_BUTTON_CLICK from '../const';

export function buttonClick(button) {
    console.log('Button clicked: '+button);
    return {
        type: ACTION_BUTTON_CLICK,
        payload: button,
    }
}