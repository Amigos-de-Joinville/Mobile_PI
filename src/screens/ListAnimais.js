import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Avatar, Title } from "react-native-paper";
import "react-native-gesture-handler";
import Button from "../components/Button";

import { mdiTagHeartOutline } from "@mdi/js";

const LeftContent = (props) => (
  <Avatar.Icon {...props} path={mdiTagHeartOutline} size={1} />
);

const MyComponent = (props) => (
  <Card style={styles.card}>
    <Card.Title
      title={props.animal.nome}
      subtitle={props.animal.raca}
      left={LeftContent}
    />

    <Card.Cover source={{ uri: props.animal.foto }} style={styles.animal} />
    <Card.Actions style={styles.button}>
      <Button id={props.animal.id} navigation={props.navigation}></Button>
    </Card.Actions>
  </Card>
);

function ListAnimais({ route, navigation }) {
  const { especie } = route.params;

  const [animais, setData] = useState([]);
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    axios.get("https://django-pi-j444-dev.fl0.io/animais/").then((response) => {
      setData(response.data);
      const novosFiltrados = animais.filter(
        (animal) => animal.especie === especie
      );
      setFiltrados(novosFiltrados);
    });
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.texto}> Se encante e adote!</Text>
        <View style={styles.conteudo}>
          {filtrados.map((animal) => (
            <MyComponent
              animal={animal}
              key={animal.id}
              navigation={navigation}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: 20,
    alignItems: "center",
  },
  texto: {
    fontSize: 25,
    textAlign: "center",
  },
  conteudo: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    marginLeft: 75,
  },
  card: {
    width: "70%",
    heigth: 51,
    borderRadius: 0,
    margin: 19,
    padding: 10,
    backgroundColor: "white",
  },
  animal: {
    resizeMode: "stretch",
    width: "100%",
    height: 225,
  },
  ScrollView: {
    marginHorizontal: 0,
  },
  button: {
    marginRight: 0,
    buttonColor: "pink",
  },
  buttoncard: {
    marginRight: 0,
    buttonColor: "pink",
  },
});

export default ListAnimais;
