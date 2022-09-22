import Sound from 'react-native-sound';
import { SOUNDSET } from '../const';
import soundKey0 from "../assets/sound/0_button.wav";
import soundKey1 from "../assets/sound/1_button.wav";
import soundKey2 from "../assets/sound/2_button.wav";
import soundKey3 from "../assets/sound/3_button.wav";
import soundKey4 from "../assets/sound/4_button.wav";
import soundKey5 from "../assets/sound/5_button.wav";
import soundKey6 from "../assets/sound/6_button.wav";
import soundKey7 from "../assets/sound/7_button.wav";
import soundKey8 from "../assets/sound/8_button.wav";
import soundKey9 from "../assets/sound/9_button.wav";
import soundKeyC from "../assets/sound/C_button.wav";
import soundKeyL from "../assets/sound/L_button.wav";
import soundCancel from "../assets/sound/cancel.wav";
import soundRing from "../assets/sound/ring.wav";

export default (soundset) => {
    var soundFile = null;
    switch(soundset) {
        case SOUNDSET.KEY_0: soundFile = soundKey0; break;
        case SOUNDSET.KEY_1: soundFile = soundKey1; break;
        case SOUNDSET.KEY_2: soundFile = soundKey2; break;
        case SOUNDSET.KEY_3: soundFile = soundKey3; break;
        case SOUNDSET.KEY_4: soundFile = soundKey4; break;
        case SOUNDSET.KEY_5: soundFile = soundKey5; break;
        case SOUNDSET.KEY_6: soundFile = soundKey6; break;
        case SOUNDSET.KEY_7: soundFile = soundKey7; break;
        case SOUNDSET.KEY_8: soundFile = soundKey8; break;
        case SOUNDSET.KEY_9: soundFile = soundKey9; break;
        case SOUNDSET.KEY_C: soundFile = soundKeyC; break;
        case SOUNDSET.KEY_L: soundFile = soundKeyL; break;
        case SOUNDSET.CANCEL: soundFile = soundCancel; break;
        case SOUNDSET.RING: soundFile = soundRing; break;
    }
    
    Sound.setCategory('Playback');
    
    const click = new Sound(soundFile, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + click.getDuration() + 'number of channels: ' + click.getNumberOfChannels());
      
        // Play the sound with an onEnd callback
        click.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      });
      click.setVolume(1);
      click.play();
}