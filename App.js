import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import AboutScreen from "./src/Screens/AboutScreen/AboutScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import ItemScreen from "./src/Screens/ItemScreen/ItemScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={HomeScreen} />
        <Drawer.Screen name="about" component={AboutScreen} />
        <Drawer.Screen name="item" component={ItemScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
