import { useState, useEffect } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
const {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  ScrollView,
} = require("react-native");

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { styles } from "./styles/cratePostScreenStyles";

export const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isFocused, setIsFocused] = useState({
    title: false,
    location: false,
  });

  const titleHandler = (value) => setTitle(value);
  const locationHandler = (value) => setLocation(value);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const onPosting = () => {
    console.log(title);
    console.log(location);
    // navigation.navigate("Posts");
    setTitle("");
    setLocation("");
  };
  const handleInputFocus = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: true }));
  };
  const handleInputBlur = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: false }));
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.scroll}>
            <View style={styles.content}>
              <View style={styles.box}>
                <View style={styles.makePhotoBox}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    // onPress={...logic}
                    style={styles.makePhotoBtn}
                  >
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.makePhotoText}>Завантажте фото</Text>

                <View style={styles.form}>
                  <View style={styles.inputBox}>
                    <TextInput
                      onFocus={() => {
                        handleInputFocus("title");
                      }}
                      onBlur={() => handleInputBlur("title")}
                      placeholderTextColor="#BDBDBD"
                      placeholder="Назва..."
                      value={title}
                      onChangeText={titleHandler}
                      style={styles.input}
                    />
                  </View>
                  <View style={{ ...styles.inputBox, marginBottom: 32 }}>
                    <SimpleLineIcons
                      style={styles.locationIcon}
                      name="location-pin"
                      size={24}
                      color="#BDBDBD"
                    />
                    <TextInput
                      onFocus={() => {
                        handleInputFocus("location");
                      }}
                      onBlur={() => handleInputBlur("location")}
                      placeholderTextColor="#BDBDBD"
                      placeholder="Місцевість..."
                      value={location}
                      onChangeText={locationHandler}
                      style={styles.input}
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.postBtn}
                    onPress={onPosting}
                  >
                    <Text style={styles.btnTitle}>Опублікувати</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.trashContainer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.deleteBtn}
                  onPress={onPosting}
                >
                  <FontAwesome5 name="trash-alt" size={24} color="#DADADA" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* <View style={styles.scroll}>
          <View style={styles.content}>
            <View style={styles.box}>
              <View style={styles.makePhotoBox}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  // onPress={...logic}
                  style={styles.makePhotoBtn}
                >
                  <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
              <Text style={styles.makePhotoText}>Завантажте фото</Text>

              <View style={styles.form}>
                <View style={styles.inputBox}>
                  <TextInput
                    onFocus={() => {
                      handleInputFocus("title");
                    }}
                    onBlur={() => handleInputBlur("title")}
                    placeholderTextColor="#BDBDBD"
                    placeholder="Назва..."
                    value={title}
                    onChangeText={titleHandler}
                    style={styles.input}
                  />
                </View>
                <View style={{ ...styles.inputBox, marginBottom: 32 }}>
                  <SimpleLineIcons
                    style={styles.locationIcon}
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                  <TextInput
                    onFocus={() => {
                      handleInputFocus("location");
                    }}
                    onBlur={() => handleInputBlur("location")}
                    placeholderTextColor="#BDBDBD"
                    placeholder="Місцевість..."
                    value={location}
                    onChangeText={locationHandler}
                    style={styles.input}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.postBtn}
                  onPress={onPosting}
                >
                  <Text style={styles.btnTitle}>Опублікувати</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.trashContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.deleteBtn}
                onPress={onPosting}
              >
                <FontAwesome5 name="trash-alt" size={24} color="#DADADA" />
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
      {/* </ScrollView> */}
    </TouchableWithoutFeedback>
  );
};
