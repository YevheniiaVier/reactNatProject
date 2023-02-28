// const { View, Text } = require("react-native");
import { useState } from "react";
import { styles } from "../main/styles/commentsStyles";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export const CommentsScreen = ({ navigate, route }) => {
  const [userComment, setUserComment] = useState("");
  const [comments, setComments] = useState([]);
  const [date, setDateTime] = useState("");
  const { photo } = route.params;

  const getCurrentDateDate = () => {
    //Get Current Date
    let date = new Date().getDate();
    //Get Current Month
    let month = new Date().getMonth() + 1;
    //Get Current Year
    let year = new Date().getFullYear();
    //Get Current Time Hours
    let hours = new Date().getHours();
    //Get Current Time Minutes
    let min = new Date().getMinutes();
    //Get Current Time Seconds
    let sec = new Date().getSeconds();
    const currentTime =
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec;
    return currentTime;
    // setDateTime(currentTime);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const commentHandler = (value) => setUserComment(value);

  const onComment = () => {
    const date = getCurrentDateDate();
    const newComment = { comment: userComment, date };
    setComments((prevState) => [...prevState, newComment]);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.commentsBox}>
        <View style={styles.postBox}>
          <Image source={{ uri: photo }} style={styles.postImg} />
        </View>

        <View style={styles.imgBox}>
          <Image
            source={require("../../assets/images/avatar.jpg")}
            style={styles.avatar}
          />
        </View>
        <Text>{item.userComment}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.inner}>
          <View>
            <View style={styles.postBox}>
              <Image source={{ uri: photo }} style={styles.postImg} />
            </View>
            <FlatList
              data={comments}
              keyExtractor={(item, index) => index.toString}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Залиш тут коментар..."
              placeholderTextColor={"#BDBDBD"}
              value={userComment}
              onChangeText={commentHandler}
              style={styles.commentInput}
            />
            <TouchableOpacity style={styles.commentBtn} onPress={onComment}>
              <AntDesign name="arrowup" size={14} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
