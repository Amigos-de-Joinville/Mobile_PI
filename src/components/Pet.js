import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Pet = () => {
  return (
    <View style={styles.petContainer}>
      <Image source={{ uri: "https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg"}} style={styles.petImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  petContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems:"center",
  },
  petImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  petName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  petDescription: {
    marginTop: 5,
  },
});

export default Pet;