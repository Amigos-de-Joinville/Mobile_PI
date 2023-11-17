import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { Card, Text } from "react-native-paper";
import { View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const DetailComponent = (props) => (
  <View style={styles.container}>
    <Card.Cover style={styles.card} source={{ uri: props.animal.foto }} />
    <Card style={styles.detail}>
      <Card.Content style={styles.text}>
        <Text variant="titleLarge">{props.animal.nome}</Text>
        <Text variant="bodyMedium">{props.animal.raca.nome}</Text>
        <Text variant="bodyMedium">{props.animal.descricao}</Text>
      </Card.Content>
    </Card>
  </View>
);

function DetailAnimal({ route, navigation }) {
  const { id } = route.params;

  const [animal, setAnimal] = useState({
    foto: "",
    nome: "",
    raca: "",
    descricao: "",
  });

  useEffect(() => {
    axios.get(`https://django-pi-dev-rxrf.4.us-1.fl0.io/api/animais/${id}`).then((response) => {
      setAnimal(response.data);
    });
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <Text>itemId: {JSON.stringify(id)}</Text>
      <View style={styles.container}>
        <View style={styles.conteudo}>
          <DetailComponent
            animal={animal}
            key={animal.id}
            navigation={navigation}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15%",
  },
  card: {
    width: 250,
    height: 280,
    padding: 0,
  },
  detail: {
    padding: 20,
    marginTop: 30,
    marginBottom: 100,
    backgroundColor: "white",
    margin: 20,
  },
  text: {
    alignItems: "center",
  },
  ScrollView: {
    marginHorizontal: 0,
  },
});

export default DetailAnimal;
