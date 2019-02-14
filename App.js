import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View
} from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component{
  render () {
    return (
      <ImageBackground source = {require ('./assets/ForestBG.jpg')} style = {styles.container}>
        </ImageBackground>
      
    )
  }
}

<Button
  onPress={onPressLearnMore}
  title="Quit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
