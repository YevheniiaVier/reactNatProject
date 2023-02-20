import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
// import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import {
  Text,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { styles } from "./styles";

const RobotoRegular = require("./assets/fonts/Roboto/Roboto-Regular.ttf");
const RobotoBold = require("./assets/fonts/Roboto/Roboto-Bold.ttf");
const RobotoMedium = require("./assets/fonts/Roboto/Roboto-Medium.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegular,
    "Roboto-Bold": RobotoBold,
    "Roboto-Medium": RobotoMedium,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return <RegistrationScreen />;
}
