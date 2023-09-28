import React from "react";
import { Button, Text, View } from "react-native";

export default function ItemScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Item Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("about")}
      />
    </View>
  );
}
