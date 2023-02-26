const { View, Text } = require("react-native");
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
      <View style={styles.imgWrap}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.commentsListWrap}>
        <FlatList />
      </View>
      <View style={styles.commentsInputWrap}>
        <TextInput
          placeholder="Comment..."
          placeholderTextColor={"#BDBDBD"}
          value={comment}
          // onChange={() => {
          // }}
          style={styles.commentsInput}
        />
        <TouchableOpacity
          style={styles.commentsSubmitBtn}
          // onPress={onSubmit}
        >
          <AntDesign name="arrowup" size={14} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
