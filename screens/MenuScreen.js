import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class MenuScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>menuScreen</Text>
            </View>
        );
    }
}
export default MenuScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});