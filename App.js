import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View, 
  Button,
  Switch,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";



import MenuScreen from "./screens/MenuScreen";


export default class App extends React.Component{
  /* state = {
    switchValue: false
  }
  switchChange = () => {
    this.setState({switchValue: !this.state.switchValue});
  }
  startGame = () => {
    console.log('Start button pressed')
  } */

  render () {
    return (
      
      <View style={styles.container}>
        <ImageBackground source={require ('./assets/ForestBG.jpg')} style={styles.bg} >
        </ImageBackground>
        <AppStackNavigator/>
       {/*  <Button
        title="Start"
        onPress={this.startGame}
        /> */}
        
       {/*  <Switch onValueChange={this.switchChange} value={this.state.switchValue} /> */}
      
      </View>
    );

  }

}

const AppStackNavigator = createStackNavigator({
  Menu: MenuScreen
  });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});