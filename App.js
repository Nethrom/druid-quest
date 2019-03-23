import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View, 
  Button,
  Switch,
 } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class MenuScreen extends React.Component {
  state = {
    switchValue: false
  }
  switchChange = () => {
    this.setState({switchValue: !this.state.switchValue});
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <ImageBackground source={require ('./assets/ForestBG.jpg')} style={styles.bg} >
        </ImageBackground>
         <Button
          title="Start"
          onPress={() => this.props.navigation.navigate('Game')}
        />
        state = {
    switchValue: false
         }
    switchChange = () => {
    this.setState({switchValue: !this.state.switchValue});
  }

        <Button
        title="Leader Board"
        onPress={() => this.props.navigation.navigate('LeaderBoard')}
        />
       </View>
    );
  }
}

class GameScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Game Screen</Text>
        <Button
          title="Menu"
          onPress={() => this.props.navigation.navigate('Menu')}
        />
      </View>
    );
  }
}
class LeaderBoardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 , alignItems: 'center' , justifyContent: 'center' }}>
      <Text>Leader Board</Text>
      <Button
      title="Menu"
      onPress={() => this.props.navigation.navigate('Menu')}
      />
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
    },
    Game: {
      screen: GameScreen,
    },
    LeaderBoard: {
      screen: LeaderBoardScreen
    },
  },
  {
    initialRouteName: 'Menu',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
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