const { View, Text } = require("react-native");
import { styles } from "./styles/mainStyles";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};
