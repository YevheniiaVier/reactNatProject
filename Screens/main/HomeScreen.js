const { View, Text } = require("react-native");
import { styles } from "./mainStyles";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};
