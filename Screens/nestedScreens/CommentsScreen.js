// const { View, Text } = require("react-native");
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { styles } from "../main/styles/commentsStyles";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
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
  // const { photo } = route.params;
  const { name } = useSelector((state) => state.auth);
  const { postId, photo } = route.params;
  useEffect(() => {
    getAllComments();
  }, []);
  const getCurrentDateDate = () => {
    const months = [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
    ];
    const date = new Date();
    let day = date.getDate();
    let monthName = months[date.getMonth()];
    let year = date.getFullYear();
    let hours = date.getHours();
    let min = date.getMinutes();
    const currentTime =
      day + " " + monthName + ", " + year + " | " + hours + ":" + min;
    return currentTime;
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const commentHandler = (value) => setUserComment(value);

  const addComment = async () => {
    const date = getCurrentDateDate();
    const docRef = await addDoc(collection(db, `posts/${postId}`, "comments"), {
      userComment,
      name,
      date,
    });
    dismissKeyboard();
    // const newComment = { comment: userComment, date };
    // setComments((prevState) => [...prevState, newComment]);
    setUserComment("");
  };

  const getAllComments = async () => {
    const querySnapshot = await getDocs(
      collection(db, `posts/${postId}/comments`)
    );
    setComments(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.commentsBox}>
        <View style={styles.imgBox}>
          <Image
            source={require("../../assets/images/avatar.jpg")}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.commentText}>{item.userComment}</Text>
        <Text style={styles.commentDate}>{item.date}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 122}
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
              keyExtractor={(item, index) => item.id}
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
            <TouchableOpacity style={styles.commentBtn} onPress={addComment}>
              <AntDesign name="arrowup" size={14} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
