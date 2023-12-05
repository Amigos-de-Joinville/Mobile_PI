import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Drawer from "./components/Drawer";
// import Tab from "./components/Tab"

import Main from "./src/screens/Main";
import Login from "./src/screens/Login";
import DetailAnimal from "./src/screens/Animal";

import { ScrollView } from "react-native-gesture-handler";
import { RecoilRoot } from "recoil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
            style={{ color: "pink" }}
          />
          <Stack.Screen
            name="DetailAnimal"
            component={DetailAnimal}
            options={{ headerShown: false }}
            style={{ color: "pink" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "pink",
  },
});
