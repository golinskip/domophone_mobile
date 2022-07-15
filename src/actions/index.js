const TYPE_BUTTON_CLICK = 'BUTTON_CLICK';

export function buttonClick(button) {
    return {
        type: TYPE_BUTTON_CLICK,
        payload: {
            button: button,
        }
    }
}