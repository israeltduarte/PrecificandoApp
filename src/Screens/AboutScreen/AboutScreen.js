import React from "react";
import { Button, Text, View } from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Button
        title="Go to Item"
        onPress={() => navigation.navigate("item")}
      />
    </View>
  );
}
