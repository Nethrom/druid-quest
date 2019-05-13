import React from 'react';
import { View,Text,Button } from 'react-native';


export default function LeaderBoardScreen(props) {
    

    return (
        <View style={{ flex: 1 , alignItems: 'center' , justifyContent: 'center' }}>
            <Text>Leader Board</Text>
            <Button
            title="Menu"
            onPress={() => props.navigation.navigate('Menu')}
            />
        </View>
    );
}