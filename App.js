import { Provider } from "react-redux";
import { Text } from "react-native";

import { useFonts } from "expo-font";

const RobotoRegular = require("./assets/fonts/Roboto/Roboto-Regular.ttf");
const RobotoBold = require("./assets/fonts/Roboto/Roboto-Bold.ttf");
const RobotoMedium = require("./assets/fonts/Roboto/Roboto-Medium.ttf");

import { store } from "./redux/store";
import { Main } from "./Components/Main";

export default function App({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegular,
    "Roboto-Bold": RobotoBold,
    "Roboto-Medium": RobotoMedium,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
