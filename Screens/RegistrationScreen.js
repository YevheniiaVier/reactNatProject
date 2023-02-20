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
  const [email, setEmail] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View>
          <TextInput
            placeholder="Username"
            value={name}
            onChangeText={nameHandler}
            style={styles.input}
          />

          <TextInput
            placeholder="E-mail"
            value={password}
            onChangeText={emailHandler}
            style={styles.input}
          />
          <TextInput
            placeholder="Пароль"
            value={password}
            onChangeText={passwordHandler}
            style={styles.input}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btn}
            onPress={onLogin}
          >
            <Text style={styles.btnTitle}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
