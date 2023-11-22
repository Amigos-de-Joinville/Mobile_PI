import React from "react";
import { View, Modal, ScrollView, StyleSheet } from "react-native";
import { Button} from "react-native-paper";
import { Card, Text } from 'react-native-paper';


const ConfirmationModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
      <ScrollView>
      <Card>
      <Card.Content>
          <Text variant="bodyMedium">Você tem certeza que deseja cadastrar um novo animal?</Text>
          <Button style={styles.buttons}  mode={"contained"} onPress={onClose}> Cancelar </Button>
          <Button style={styles.buttons}  mode={"contained"}onPress={() => { onClose(); onConfirm(); }} > Confirmar </Button>
          </Card.Content>
          </Card>
          </ScrollView>
        
        </View>
      
    </Modal>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
    buttons: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 40,
      marginBottom: 20,
      backgroundColor: "#F7559A",
      width: 150,
      marginLeft:70,
      color: "white",
      textColor: "white",
    },
    container: {

      padding: 30,
      paddingTop: 300,
    },
    text: {
      backgroundColor: 'pink',
    }

  });
  