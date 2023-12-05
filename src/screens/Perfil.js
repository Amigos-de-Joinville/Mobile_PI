import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
const perfil = require("../images/profile.png");

export default function Perfil({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <Text style={styles.perfil}>Amanda de Souza Tavares</Text>

        <Avatar.Image style={styles.profile} size={100} source={perfil} />
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={35}
            color="#F7559A"
          />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Notificações</Text>
            <Text style={styles.description}>
              Minha central de notificações
            </Text>
          </ScrollView>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate("DetailAnimal")}
        >
          <MaterialCommunityIcons
            name="clipboard-check-outline"
            size={35}
            color="#F7559A"
          />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Adoções</Text>
            <Text style={styles.description}>Minhas últimas adoções</Text>
          </ScrollView>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={35}
            color="#F7559A"
          />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Favoritos</Text>
            <Text style={styles.description}>Meus animais favoritados</Text>
          </ScrollView>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <MaterialCommunityIcons
            name="card-account-details-outline"
            size={35}
            color="#F7559A"
          />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Dados</Text>
            <Text style={styles.description}>Meus dados pessoais</Text>
          </ScrollView>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.menuAdicional}>
        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialCommunityIcons
              name="help-circle"
              size={25}
              color="#F7559A"
            />
            <Text style={styles.optionName}>Ajuda</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialIcons name="settings" size={25} color="#F7559A" />
            <Text style={styles.optionName}>Configurações</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialIcons name="security" size={25} color="#F7559A" />
            <Text style={styles.optionName}>Segurança</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcoesAdicionais}>
          <View style={styles.wrapper}>
            <MaterialCommunityIcons
              name="handshake"
              size={25}
              color="#F7559A"
            />
            <Text style={styles.optionName}>Seja parceiro!</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#F7559A"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    fontSize: 15,
  },
});
