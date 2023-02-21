import { useState, useEffect } from "react";

import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";

export const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isFocused, setIsFocused] = useState({
    login: false,
    email: false,
    password: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const passwordHandler = (value) => setPassword(value);
  const emailHandler = (value) => setEmail(value);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsShowKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const onLogin = () => {
    console.log(password);
    console.log(email);
    // navigation.navigate("Posts");
    setEmail("");
    setPassword("");
  };
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleImputFocus = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: true }));
  };
  const handleImputBlur = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: false }));
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ImageBackground
          style={styles.bcg}
          source={require("../../assets/images/bcgimg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View style={{ ...styles.form, paddingTop: 32 }}>
              <Text style={styles.formTitle}>Увійти</Text>

              <View>
                <TextInput
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    handleImputFocus("email");
                  }}
                  onBlur={() => handleImputBlur("email")}
                  placeholderTextColor="#BDBDBD9"
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={emailHandler}
                  style={isFocused.email ? styles.inputFocused : styles.input}
                />
              </View>
              <View>
                <TextInput
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    handleImputFocus("password");
                  }}
                  onBlur={() => handleImputBlur("password")}
                  placeholderTextColor="#BDBDBD9"
                  placeholder="Пароль"
                  value={password}
                  secureTextEntry={secureTextEntry}
                  onChangeText={passwordHandler}
                  style={
                    isFocused.password ? styles.inputFocused : styles.input
                  }
                />
                <TouchableOpacity
                  style={styles.passwordBtn}
                  onPress={toggleSecureEntry}
                >
                  {secureTextEntry ? (
                    <Text style={styles.passwordBtnText}>Показати</Text>
                  ) : (
                    <Text style={styles.passwordBtnText}>Сховати</Text>
                  )}
                </TouchableOpacity>
              </View>

              {!isShowKeyboard && (
                <>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btn}
                    onPress={onLogin}
                  >
                    <Text style={styles.btnTitle}>Увійти</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    // style={styles.btn}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text style={{ ...styles.formText, marginBottom: 144 }}>
                      Немає аккаунта? Зареєструватися
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};
