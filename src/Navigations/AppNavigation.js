import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AboutScreen from "../Screens/AboutScreen/AboutScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import NewItemScreen from "../Screens/ItemScreen/NewItemScreen/NewItemScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="about"
        component={AboutScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="new-item"
        component={NewItemScreen}
        options={{ title: "Welcome" }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="about"
        component={AboutScreen}
        options={{ title: "About" }}
      />
      <Drawer.Screen
        name="new-item"
        component={NewItemScreen}
        options={{ title: "New Item" }}
      />
    </Drawer.Navigator>
  );
};

export default function AppContainer() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}
