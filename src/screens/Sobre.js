import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";

import Pet from "../components/Pet";
import ImportanciaAdocao from "../components/ImportanciaAdocao";
import AnaP from "../components/AnaP"
import Ph from "../components/Ph"
import Anal from "../components/Anal"




export default function Sobre() {
    return (
        <View>
            <ScrollView>
            <Pet/>
            <ImportanciaAdocao/>
            <AnaP/>
            <Ph/>
            <Anal/>

            </ScrollView>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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