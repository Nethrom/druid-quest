import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

import Character from "../../../models/Character";

export default function Monster() {
  onMonsterTap();
  if (monster) return;

  const { monster } = props;

  monster.takeDamage(Character.level * 2);

  return (
    <View>
      <TouchableOpacity onPress={onMonsterTap()}>
        <Image
          resizeMode="contain"
          source={require("../../../../assets/bunny.gif")}
          style={StyleSheet.imageStyle}
        />
        {monster.isCorrupt && (
          <Image
            source={require("../../../../assets/corrupted.gif")}
            style={StyleSheet.corruptStyle}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

/*export default class Monster extends React.Component {
	constructor(props){
		super(props)
	}
	onMonsterTap () {
		if (!this.props.monster) return;

		const { monster } = this.props;

		monster.takeDamage(Character.level * 2);
	}

	render() {
		return (
			<View>  
				<TouchableOpacity onPress={this.onMonsterTap.bind(this)}>
					<Image
						resizeMode='contain'
						source={require('../../../../assets/bunny.gif')}
						style={StyleSheet.imageStyle}
					/>
					{this.props.monster.isCorrupt && 
						<Imagen
							source={require('../../../../assets/corrupted.gif')}
							style={StyleSheet.corruptStyle}
						/>
					}
				</TouchableOpacity>
			</View> 
		);
	}
  }*/

const styles = StyleSheet.create({
  imageStyle: {
    position: "absolute",
    top: 0
  },
  corruptStyle: {
    position: "absolute",
    top: 0,
    width: "50%",
    height: "50%"
  }
});
