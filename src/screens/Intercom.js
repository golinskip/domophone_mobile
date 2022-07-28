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
      <View>
        <Screen sign={4}/>
        <Keyboard/>
      </View>
    );
  }
}

export default Intercom;
