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

class HomeScreen extends React.Component{
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
      
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
          />
        <ImageBackground source={require ('./assets/ForestBG.jpg')} style={styles.bg} >
        </ImageBackground>

       {/*  <Button
        title="Start"
        onPress={this.startGame}
        /> */}
        
       {/*  <Switch onValueChange={this.switchChange} value={this.state.switchValue} /> */}
      
      </View>
    );

  }

}
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
    <Text>Details Screen</Text>
    <Button
    title="Go to Details.... again"
    onPress={() => this.props.navigation.push('Details')}
    />
    <Button
    title="Go to Home"
    onPress={() => this.props.navigation.navigate('Home')}
    />
    <Button
    title="Go Back"
    onPress={() => this.props.navigation.goBack()}
    />
  </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
  Home: {
    screen: HomeScreen,
  },
  Details: {

   screen: DetailsScreen,
  },
},
  {
    initialRouteName: "Home"
  }
  );
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return <AppContainer />; 
  }
}


export default createAppContainer(AppNavigator);


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