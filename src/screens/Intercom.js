import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Keyboard from '../components/Keyboard';

class Intercom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Keyboard/>
      </View>
    );
  }
}

export default Intercom;
