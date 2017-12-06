/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';


import AnimatedSnow from './AnimatedSnow';
const {height, width} = Dimensions.get('window');

class SnowFall extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <View style={styles.container}>
        <Image source={{uri: 'avt'}} style={styles.snowContainer}/>
        <AnimatedSnow style={styles.snowContainer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  snowContainer: {
    position: 'absolute',
    top: width/3,
    width: width,
    height: height / 2,
  },

  imageContainer: {
    position: 'absolute',
    top: width/3,
    width: width,
    height: height / 2,
    resizeMode: 'contain'
  }
});
AppRegistry.registerComponent('SnowFall', () => SnowFall);
