import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

import { Text } from "react-native";

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
  // return <LoginScreen />;
}
