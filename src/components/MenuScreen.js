import { StyleSheet } from 'react-native'

export default class MenuScreen extends React.Component {
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
         <Switch onValueChange={this.switchChange} value={this.state.switchValue} />
         <Text>{this.state.switchValue ? 'Music On' : 'Music Off'}</Text>
  
          <Button
          title="Leader Board"
          onPress={() => this.props.navigation.navigate('LeaderBoard')}
          />
         </View>
      );
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