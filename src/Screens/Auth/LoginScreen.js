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

import { useDispatch } from "react-redux";

import { authSignIn } from "../../redux/auth/auth-operations";

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
  const dispatch = useDispatch();
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
    setIsShowKeyboard(false);
  };
  const onLogin = () => {
    dismissKeyboard();
    dispatch(authSignIn({ email, password }));
    // navigation.navigate("Home");
    setEmail("");
    setPassword("");
  };
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleInputFocus = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: true }));
  };
  const handleInputBlur = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: false }));
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ImageBackground
          style={styles.bcg}
          source={require("../../../assets/images/bcgimg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View style={{ ...styles.form, paddingTop: 32 }}>
              <Text style={styles.formTitle}>????????????</Text>

              <View>
                <TextInput
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    handleInputFocus("email");
                  }}
                  onBlur={() => handleInputBlur("email")}
                  placeholderTextColor="#BDBDBD9"
                  placeholder="???????????? ?????????????????????? ??????????"
                  value={email}
                  onChangeText={emailHandler}
                  style={isFocused.email ? styles.inputFocused : styles.input}
                />
              </View>
              <View>
                <TextInput
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    handleInputFocus("password");
                  }}
                  onBlur={() => handleInputBlur("password")}
                  placeholderTextColor="#BDBDBD9"
                  placeholder="????????????"
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
                    <Text style={styles.passwordBtnText}>????????????????</Text>
                  ) : (
                    <Text style={styles.passwordBtnText}>??????????????</Text>
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
                    <Text style={styles.btnTitle}>????????????</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    // style={styles.btn}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text style={{ ...styles.formText, marginBottom: 144 }}>
                      ?????????? ????????????????? ??????????????????????????????
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
