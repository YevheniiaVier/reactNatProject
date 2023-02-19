import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
  ImageBackground,
  // Button,
} from "react-native";
import { styles } from "../styles";

export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Username"
            value={name}
            onChangeText={nameHandler}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={passwordHandler}
            style={styles.input}
          />
          {/* <Text>My React Native Project</Text> */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btn}
            onPress={onLogin}
          >
            <Text style={styles.btnTitle}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};
