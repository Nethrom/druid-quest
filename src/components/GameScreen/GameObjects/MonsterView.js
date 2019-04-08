import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';

import Character from '../../../models/Character';

export default class Monster extends React.Component {

	onMonsterTap () {
		const { monster } = this.props;

		monster.takeDamage(Character.level * 2);
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.onMonsterTap}>  
				<Image
					resizeMode='contain'
					source={require('../../../assets/bunny.gif')}
					style={StyleSheet.imageStyle}
				/>
				{this.props.monster.isCorrupt && 
					<Image
						source={require('../../../assets/corrupted.gif')}
						style={StyleSheet.corruptStyle}
					/>
				}
			</TouchableWithoutFeedback> 
		);
	}
  }

const styles = StyleSheet.create({
  imageStyle: {
  }
});

