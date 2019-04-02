import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default class MonsterView extends React.Component {
    // add monsters here as sub components 
    // pass in monster power/type/etc based on character data from props
    //const animalImages = [10];
    //animalImages[0] = loadImage? 
   
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
        //onPress is not defined yet.
          onPress={this.onPress}>  
          <Image
          resizeMode='contain'
          source={require('../../../assets/bunny.gif')}
          style={StyleSheet.imageStyle}
          />
          </TouchableOpacity>  
         </View>
      );
    }
  }

