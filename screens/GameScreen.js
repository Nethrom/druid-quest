
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class GameScreen extends Component {

    render() {
        return (

            <View style={styles.container}>
                <Button title="Go To Home Screen"
                   onPress={() => this.props.navigation.navigate('Menu')}/>
        
         </View>
     );
    }
}


export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});