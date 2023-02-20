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
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <TextInput
            placeholderTextColor="#BDBDBD9"
            placeholder="Логін"
            value={name}
            onChangeText={nameHandler}
            style={styles.input}
          />

          <TextInput
            placeholderTextColor="#BDBDBD9"
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={emailHandler}
            style={styles.input}
          />
          <View style={styles.passwordBox}>
            <TextInput
              placeholderTextColor="#BDBDBD9"
              placeholder="Пароль"
              value={password}
              secureTextEntry={secureTextEntry}
              onChangeText={passwordHandler}
              style={styles.passwordInput}
            />
            <TouchableOpacity
              style={styles.passwordBtn}
              onPress={toggleSecureEntry}
            >
              {secureTextEntry ? (
                <Text style={styles.passwordBtnText}>Show Password</Text>
              ) : (
                <Text style={styles.passwordBtnText}>Hide Password</Text>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btn}
            onPress={onLogin}
          >
            <Text style={styles.btnTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.formText}>Вже є аккаунт? Увійти</Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
