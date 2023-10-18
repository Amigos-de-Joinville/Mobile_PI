import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImportanciaAdocao = () => {
  return (
    <View style={styles.importanciaContainer}>
      <Text style={styles.title}>Por que é importante adotar?</Text>
      <Text style={styles.text}>
        Adotar um animal de estimação não apenas traz alegria para sua vida, mas também salva
        vidas. Muitos animais abandonados ou resgatados estão à procura de um lar amoroso. Ao
        adotar, você não apenas oferece a eles um lar seguro, mas também ajuda a reduzir o
        número de animais de rua. Além disso, os animais adotados muitas vezes são gratos e
        dedicados aos seus novos donos, proporcionando amor incondicional e companheirismo.
      </Text>
    </View>

  );
};


const styles = StyleSheet.create({
  importanciaContainer: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#FF0093",
    textAlign:"center",
  },
  text: {
    fontSize: 16,
    textAlign:"center",
  },
});

export default ImportanciaAdocao;