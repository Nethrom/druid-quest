import Character from '../../models/Character';

import MonsterView from './MonsterView';

export default function GameScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Game Screen</Text>
          <Button
            title="Menu"
            onPress={() => props.navigation.navigate('Menu')}
          />
          <MonsterView character={Character} />
        </View>
    )
}