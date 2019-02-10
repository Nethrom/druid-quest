import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View
} from 'react-native';

export default class App extends React.Component{
  render () {
    return (
      <ImageBackground source = {require ('./assets/ForestBG.jpg')} style = {styles.container}>
        </ImageBackground>
      
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
