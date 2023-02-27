// const { View, Text } = require("react-native");
import { styles } from "../main/styles/commentsStyles";

import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image
          source={require("../../assets/images/posts/post-img2.jpg")}
          style={styles.img}
        />
      </View>
      <View style={styles.commentsContainer}>
        <FlatList />
      </View>
      <View style={styles.commentsInputBox}>
        <TextInput
          placeholder="Comment..."
          placeholderTextColor={"#BDBDBD"}
          value={comment}
          // onChange={() => {
          // }}
          style={styles.commentsInput}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          // onPress={onSubmit}
        >
          <AntDesign name="arrowup" size={14} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
