import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { KEYSET } from '../const';
import Key from './Key';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.keyWrap}>
        <View style={styles.keyRow}>
          <Key style={styles.key} value={KEYSET.KEY_1}>1</Key>
          <Key style={styles.key} value={KEYSET.KEY_2}>2</Key>
          <Key style={styles.key} value={KEYSET.KEY_3}>3</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key} value={KEYSET.KEY_4}>4</Key>
          <Key style={styles.key} value={KEYSET.KEY_5}>5</Key>
          <Key style={styles.key} value={KEYSET.KEY_6}>6</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key} value={KEYSET.KEY_7}>7</Key>
          <Key style={styles.key} value={KEYSET.KEY_8}>8</Key>
          <Key style={styles.key} value={KEYSET.KEY_9}>9</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key} value={KEYSET.KEY_L}>L</Key>
          <Key style={styles.key} value={KEYSET.KEY_0}>0</Key>
          <Key style={styles.key} value={KEYSET.KEY_C}>C</Key>
        </View>
      </View>
    );
  }
  
}

const styles= {
  key: {
    flex: 1,
    justifyContent: 'center',
  },
  keyRow: {
    flexDirection: 'row',
  },
  keyWrap: {
    alignItems: 'flex-start',
  }
}



export default Keyboard;