import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View, 
  Button,
  ToggleSwitch,
} from 'react-native';


export default class App extends React.Component{
  render () {
    return (
      <view>
      <ImageBackground source = {require ('./assets/ForestBG.jpg')} style = {styles.container}>
      </ImageBackground>

        //Start Button 
        <Button
        title="Start"
        />
          
       //Music Toggle Button 
      <ToggleSwitch 
      isOn={false}
      onColor='green'
      offColor='red'
      label='Music'
      labelStyle={{color: 'black', fontWeight: '900'}}
      size='large'
      onToggle={ (isOn) => console.log('changed to :', isOn)}
      />
      </view>
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
