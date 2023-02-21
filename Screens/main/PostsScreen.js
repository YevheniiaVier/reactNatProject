const { View, Text } = require("react-native");
import { styles } from "./mainStyles";

export const PostsScreen = ({ navigation, route }) => {
  // const { logIn } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PostsScreen</Text>
    </View>
  );
};
