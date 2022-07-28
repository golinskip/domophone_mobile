import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { buttonClick } from '../actions/Intercom';

class Key extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity 
      onPress={() => buttonClick(this.props.value)}
			>
        <Text style={styles.textBox}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
    textBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',

      color: 'white',
      backgroundColor: 'black',
      width: 50,
      height: 50,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      justifyContent: 'center',
      padding: 5,
      margin: 2,
    }
}

export default Key;
