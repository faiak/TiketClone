/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

import PesawatPage from './src/Container/Pages/PesawatPage';
import AppNavigator from './src/config/router';

class App extends Component {


  triggerChildAlert() {

    this.refs.dtp.setModalVisible(true);
  }


  render() {
    let state = {};
    // const counter = useSelector(state => state.counter);

    return (
      <AppNavigator />
    );
  }
};



export default App;
