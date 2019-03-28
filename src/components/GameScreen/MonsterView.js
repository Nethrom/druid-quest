import react from 'react';

export default class MonsterView extends React.Component {
    // add monsters here as sub components 
    // pass in monster power/type/etc based on character data from props

    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
          onPress={() => this.firstButtonCall()}>
          <Image
          resizeMode='contain'
          source={require('./assets/bunny.gif')}
          style={StyleSheet.imageStyle}
          />
          </TouchableOpacity>  
           </View>
        );
      }
    }

