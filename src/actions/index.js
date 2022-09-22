import { KEYSET, SOUNDSET, TYPE_CLEAR_NUMBER, TYPE_KEY_BUTTON, TYPE_WRITE_NUMBER } from '../const';
import clickPlayer from '../lib/clickPlayer';

export function buttonClick(button) {
    clickPlayer(button);

    if(button == KEYSET.KEY_C) {
        return {
          type: TYPE_CLEAR_NUMBER,
          payload: button,
      }
    }

    if(button == KEYSET.KEY_L) {
        return {
          type: TYPE_KEY_BUTTON,
          payload: button,
      }
    }

    return {
        type: TYPE_WRITE_NUMBER,
        payload: button,
    }
}