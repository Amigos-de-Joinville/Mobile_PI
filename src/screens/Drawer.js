import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import ListaAnimais from "../screens/ListAnimais";
import Perfil from "../screens/Perfil";
import Sobre from "../screens/Sobre";
import Cadastrar from "../screens/Cadastrar";

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        style={styles.drawer}
        name="Home"
        icon=""
        component={Home}
        options={{
          drawerLabel: "Amigos de Joinville",
          drawerActiveTintColor: "#F7559A",
        }}
      />
      <Drawer.Screen
        name="Cachorros"
        component={ListaAnimais}
        initialParams={{ especie: "Cachorro" }}
        options={{ drawerLabel: "Cachorros", drawerActiveTintColor: "#F7559A" }}
      />
      <Drawer.Screen
        name="Gatos"
        icon="folder"
        component={ListaAnimais}
        initialParams={{ especie: "Gato" }}
        options={{ drawerLabel: "Gatos", drawerActiveTintColor: "#F7559A" }}
      />

      <Drawer.Screen
        name="Perfil"
        component={Perfil}
        options={{ drawerLabel: "Perfil", drawerActiveTintColor: "#F7559A" }}
      />
      <Drawer.Screen
        name="Sobre"
        icon="folder"
        component={Sobre}
        options={{ drawerLabel: "Sobre", drawerActiveTintColor: "#F7559A" }}
      />
      <Drawer.Screen
        name="Cadastrar"
        icon="folder"
        component={Cadastrar}
        options={{ drawerLabel: "Cadastrar", drawerActiveTintColor: "#F7559A" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "pink",
  },
});
