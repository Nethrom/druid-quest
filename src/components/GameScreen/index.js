import React from "react";
import { View, Text, Button } from "react-native";
import Character from "../../models/Character";

import CombatView from "./CombatView";

export default function GameScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Game Screen</Text>

      <Button title="Menu" onPress={() => props.navigation.navigate("Menu")} />
      <CombatView character={Character} />
    </View>
  );
}
