import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LedNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
        <Text>{this.props.sign}</Text>
    );
  }
}