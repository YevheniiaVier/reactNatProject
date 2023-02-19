// import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { Text, View, ImageBackground } from "react-native";

import { styles } from "./styles";

const RobotoRegular = require("./assets/fonts/Roboto/Roboto-Regular.ttf");
const RobotoBold = require("./assets/fonts/Roboto/Roboto-Bold.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegular,
    "Roboto-Bold": RobotoBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ImageBackground
      source={require("./images/bcg-img.jpg")}
      resizeMode="cover"
      style={styles.bcg}
    >
      <View style={styles.container}>
        <RegistrationScreen />

        {/* <StatusBar style="auto" /> */}
      </View>
    </ImageBackground>
  );
}
