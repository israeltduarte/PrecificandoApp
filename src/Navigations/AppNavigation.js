import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AboutScreen from "../Screens/AboutScreen/AboutScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import AddItemScreen from "../Screens/ItemScreen/AddItemScreen/AddItemScreen";
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
        options={{ title: "About" }}
      />
      <Stack.Screen
        name="new-item"
        component={NewItemScreen}
        options={{ title: "New Item" }}
      />
      <Stack.Screen
        name="add-item"
        component={AddItemScreen}
        options={{ title: "Add Item" }}
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
      <Drawer.Screen
        name="add-item"
        component={AddItemScreen}
        options={{ title: "Add Item" }}
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
