import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import ModalConfirmation from "../components/ModalConfirmation";


import { useTheme } from "react-native-paper";

import imageService from "../services/images";
import animalService from "../services/animais";
import especieService from "../services/especies";
import racaService from "../services/racas";
import corService from "../services/cores";

export default function AnimalAdd({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [animal, setAnimal] = useState({
    nome: "",
    descricao: "",
    especie: "",
    raca: "",
    cor: "",
  });

  const [especies, setEspecies] = useState([]);

  const getEspecies = async () => {
    const data = await especieService.getAllEspecies();
    setEspecies(data);
  };

  useEffect(() => {
    getEspecies();
  }, []);

  const [racas, setRacas] = useState([]);

  const getRacas = async () => {
    const data = await racaService.getAllRacas();
    setRacas(data);
  };

  useEffect(() => {
    getRacas();
  }, []);

  const [cores, setCores] = useState([]);

  const getCores = async () => {
    const data = await corService.getAllCores();
    setCores(data);
  };

  useEffect(() => {
    getCores();
  }, []);

  const save = async () => {
    console.log("salvando...");
    const image = await imageService.uploadImage(file);
    // setAnimal((animal) => ({
    //   ...animal,
    //   capa_attachment_key: image.attachment_key,
    // }));

    console.log(animal);

    const data = await animalService.saveAnimal(animal, image);
    // navigation.goBack();
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setFile(result.assets[0]);
    } else {
      alert("Você não selecionou nenhuma imagem");
    }
  };

  return (
    <ScrollView style={styles.container}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.image}
          onPress={pickImageAsync}
        />
      )}
      {!selectedImage && (
        <View>
          <Button
            style={styles.buttons}
            mode={"contained"}
            onPress={pickImageAsync}
          >
            Selecionar foto
          </Button>
        </View>
      )}
      <View style={{ marginHorizontal: 10 }}>
        <TextInput
          label="Nome"
          style={{ marginBottom: 10 }}
          mode="outlined"
          outlineColor="#F7559A"
          activeOutlineColor="#F7559A"
          onChangeText={(text) =>
            setAnimal((animal) => ({ ...animal, nome: text }))
          }
        />
        <TextInput
          label="Descricao"
          style={{ marginBottom: 10 }}
          mode="outlined"
          outlineColor="#F7559A"
          activeOutlineColor="#F7559A"
          onChangeText={(text) =>
            setAnimal((animal) => ({ ...animal, descricao: text }))
          }
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#F7559A" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          activeColor="#f7d5e3"
          maxHeight={300}
          data={especies}
          labelField="descricao"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecione a espécie"}
          value={animal.especie}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setAnimal((animal) => ({ ...animal, especie: item.id }));
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#F7559A" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          activeColor="#f7d5e3"
          outlineColor="#F7559A"
          activeOutlineColor="#F7559A"
          maxHeight={300}
          data={racas}
          labelField="nome"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecione a raça"}
          value={animal.raca}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setAnimal((animal) => ({ ...animal, raca: item.id }));
            setIsFocus(false);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#F7559A" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          activeColor="#f7d5e3"
          data={cores}
          maxHeight={300}
          labelField="descricao"
          valueField="id"
          placeholder={isFocus ? "..." : "Selecione a cor"}
          value={animal.cor}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setAnimal((animal) => ({ ...animal, cor: item.id }));
            setIsFocus(false);
          }}
        />
      </View>
      <View>
      <Button style={styles.buttons} mode={"contained"} onPress={openModal}>
        Adicionar
      </Button>
      <ModalConfirmation
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={save}
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },

  placeholderStyle: {
    fontSize: 14,
    color: "#000a",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#F7559A",
    width: 150,
    marginLeft:110,
    textColor: "white",
  },
  dropdown: {
    height: 50,
    borderColor: "#F7559A",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
