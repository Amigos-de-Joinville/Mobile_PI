import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";

// import * as SecureStore from 'expo-secure-store';
// import { useSetRecoilState } from 'recoil';

// import loginApi from '../services/login';
// import { userState } from '../recoil/atoms/auth';

// export default function Login({ navigation }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMsg, setErrorMsg] = useState(null);

//   const setUser = useSetRecoilState(userState);

//   const login = async () => {
//     try {
//       const data = await loginApi.login(username, password);
//       setUser({
//         loggedIn: true,
//         access: data.access,
//         refresh: data.refresh,
//       });
//       setUsername('');
//       setPassword('');
//       setErrorMsg(null);
//       await SecureStore.setItemAsync('access', data.access);
//       navigation.goBack();
//     } catch (error) {
//       setUser({ loggedIn: false, access: null, refresh: null });
//       setErrorMsg('Usuário ou senha inválidos!');
//       await SecureStore.deleteItemAsync('access');
//     }
//   };
// }


const logo = require("../images/pi.png");

const MyComponent = ({ navigation }) => {
  const [viewPassword, setViewPassword] = React.useState(false);
  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.headingStyle}>Entrar </Text>
        <TextInput
          style={styles.input}
          label="Email"
          mode="outlined"
          outlineColor="#F7559A"
          activeOutlineColor="#F7559A"
          placeholder="amigosdejoinville@gmail.com"
        />
        <TextInput
          style={styles.input}
          label="Senha"
          mode="outlined"
          outlineColor="#F7559A"
          activeOutlineColor="#F7559A"
          placeholder="*******"
          secureTextEntry={viewPassword}
          right={
            <TextInput.Icon
              icon={viewPassword ? "eye-off" : "eye"}
              onPress={() => setViewPassword(!viewPassword)}
            />
          }
        />
        <Button
          style={styles.buttonforms}
          mode={"contained"}
          onPress={() => navigation.navigate("Main")}
        >
          Log In
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    paddingTop: 0,
    justifyContent: "center",
  },
  headingStyle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    color: "#F7559A",
  },
  form: {
    activeOutlineColor: "#F7559A",
  },
  buttonforms: {
    backgroundColor: "#F7559A",
  },
  input: {
    align: "center",
    margin: 10,
  },
  logo: {
    resizeMode: "stretch",
    width: "100%",
    height: 150,
    paddingTop: 0,
  },
});


export default MyComponent;