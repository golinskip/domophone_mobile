import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Key from './Key';
import KEYSET from '../const';

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
          <Key style={styles.key} value="1">1</Key>
          <Key style={styles.key} value="2">2</Key>
          <Key style={styles.key} value="3">3</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key} value="4">4</Key>
          <Key style={styles.key} value="5">5</Key>
          <Key style={styles.key} value="6">6</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key} value="7">7</Key>
          <Key style={styles.key} value="8">8</Key>
          <Key style={styles.key} value="9">9</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key} value="L">L</Key>
          <Key style={styles.key} value="0">0</Key>
          <Key style={styles.key} value="C">C</Key>
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