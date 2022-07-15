import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Intercom from './src/screens/Intercom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reducers from './src/reducers';
//import { createReducer } from '@reduxjs/toolkit';
//import ReduxThunk from 'redux-thunk';

export default function App() {
  //const store = createReducer(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    //<Provider store={store}>
      <View style={styles.container}>
        <Intercom></Intercom>
      </View>
    //</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
