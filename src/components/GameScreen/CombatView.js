import React from 'react';
import { StyleSheet, View } from 'react-native';

import MonsterView from './GameObjects/MonsterView';
import Monster from '../../models/Monster';

const MAX_MONSTER_COUNT = 5;

export default class CombatView extends React.Component {
    // add monsters here as sub components 
    // pass in monster power/type/etc based on character data from props
    //const animalImages = [10];
    //animalImages[0] = loadImage?
    state = {
      monsters: [],
    }

    componentDidMount() {
      const { character } = this.props;
      const { level } = character;

      const monsterCount = level * 2;
      if (monsterCount > MAX_MONSTER_COUNT) monsterCount = MAX_MONSTER_COUNT;



      const monsters = [];
      for (let x = 0; x < monsterCount; x++) {
        monsters.push(new Monster({ hitpoints: level * 2 }))
      }
      
      this.setState({ monsters });    
    }    
       
    render() {
      const { monsters } = this.state;
        
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {
              monsters.map((monster, index) => (
             <MonsterView key={index} monster={monster} />
              ))
          }
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  imageStyle: {
  }
});

