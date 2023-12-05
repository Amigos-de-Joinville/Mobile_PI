import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import Drawer from "../components/Drawer";
const logo = require("../images/pi.png");

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  logo: {
    resizeMode: "stretch",
    width: "50%",
    height: 100,
  },
});
