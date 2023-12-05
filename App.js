import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import Main from "./src/screens/Main";
import Login from "./src/screens/Login";
import DetailAnimal from "./src/screens/Animal";

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
