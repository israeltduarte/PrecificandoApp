import React from "react";
import { Button, View } from "react-native";
import TitleBanner from "../../Components/TitleBanner/TitleBanner";

export default function ItemScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TitleBanner />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("about")}
      />
    </View>
  );
}
