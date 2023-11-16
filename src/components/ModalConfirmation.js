
import React from "react";
import { View, Text, Modal, ScrollView, StyleSheet } from "react-native";
import { Button} from "react-native-paper";

const ConfirmationModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView>
        <View>
          <Text>Você tem certeza que deseja cadastrar um novo animal?</Text>
          <Button style={styles.buttons}  mode={"contained"} onPress={onClose}> Cancelar </Button>
          <Button style={styles.buttons}  mode={"contained"}onPress={() => { onClose(); onConfirm(); }} > Confirmar </Button>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ConfirmationModal;

const styles = StyleSheet.create({
    buttons: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "#F7559A",
      width: 150,
      marginLeft:110,
      color: "white",
      textColor: "white",
    },

  });
  