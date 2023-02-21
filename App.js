import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { userRoute } from "./router";

const RobotoRegular = require("./assets/fonts/Roboto/Roboto-Regular.ttf");
const RobotoBold = require("./assets/fonts/Roboto/Roboto-Bold.ttf");
const RobotoMedium = require("./assets/fonts/Roboto/Roboto-Medium.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegular,
    "Roboto-Bold": RobotoBold,
    "Roboto-Medium": RobotoMedium,
  });
  const routing = userRoute({});

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}
