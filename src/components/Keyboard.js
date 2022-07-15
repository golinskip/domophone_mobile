import React, {Component} from 'react';
import { View, Text } from 'react-native';
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
          <Key style={styles.key}>1</Key>
          <Key style={styles.key}>2</Key>
          <Key style={styles.key}>3</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key}>4</Key>
          <Key style={styles.key}>5</Key>
          <Key style={styles.key}>6</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key}>7</Key>
          <Key style={styles.key}>8</Key>
          <Key style={styles.key}>9</Key>
        </View>
        <View style={styles.keyRow}>
          <Key style={styles.key}>L</Key>
          <Key style={styles.key}>0</Key>
          <Key style={styles.key}>C</Key>
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