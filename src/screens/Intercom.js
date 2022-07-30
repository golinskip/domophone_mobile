import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Keyboard from '../components/Keyboard';
import Screen from '../components/Screen';

class Intercom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.intercomContainer}>
        <Screen signCount={4}/>
        <Keyboard/>
      </View>
    );
  }
}

const styles = {
  intercomContainer: {
    height: '100%',
        alignItems:'center',
        justifyContent:'center'
  }
}

export default Intercom;
