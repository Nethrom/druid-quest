import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 

import MenuScreen from './src/components/MenuScreen';
import GameScreen from './src/components/GameScreen';
import LeaderBoardScreen from './src/components/LeaderBoardScreen';


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
