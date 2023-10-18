import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
const perfil = require("../images/eu.jpeg");

export default function Perfil({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <Avatar.Image style={styles.profile} size={100} source={perfil} />
        <Text style={styles.perfil}>Phelipi</Text>
        <Text style={styles.texto}>Estudande no Instututo Federal Catarinense</Text>
        </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  texto:{
    textAlign:"center",
  },
  perfil: {
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "center",
    fontSize: 18,
  },
  profile: {
    alignSelf: "center",
    fontSize: 18,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  info: {
    marginLeft: 20,
  },
  title: {
    color: "#333",
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: "#999",
  },
  menuAdicional: {
    marginTop: 30,
  },

  opcoesAdicionais: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionName: {
    marginLeft: 25,
    color: "#",
    fontSize: 15,
  },
});