import { useState, useEffect } from "react";

import {
  StatusBar,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { styles } from "../styles";

export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const nameHandler = (value) => setName(value);
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
    console.log(name);
    console.log(password);
    console.log(email);
    setEmail("");
    setName("");
    setPassword("");
  };
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ImageBackground
          style={styles.bcg}
          source={require("../assets/images/bcgimg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View style={styles.form}>
              <Text style={styles.formTitle}>Реєстрація</Text>

              <View>
                <TextInput
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholderTextColor="#BDBDBD9"
                  placeholder="Логін"
                  value={name}
                  onChangeText={nameHandler}
                  style={styles.input}
                />
              </View>

              <View>
                <TextInput
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholderTextColor="#BDBDBD9"
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onChangeText={emailHandler}
                  style={styles.input}
                />
              </View>
              <View>
                <TextInput
                  onFocus={() => setIsShowKeyboard(true)}
                  placeholderTextColor="#BDBDBD9"
                  placeholder="Пароль"
                  value={password}
                  secureTextEntry={secureTextEntry}
                  onChangeText={passwordHandler}
                  style={styles.input}
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
                    <Text style={styles.btnTitle}>Зареєструватися</Text>
                  </TouchableOpacity>
                  <Text style={styles.formText}>Вже є аккаунт? Увійти</Text>
                </>
              )}
              <View style={styles.imgBox}>
                <Image source={{ uri: image }} style={styles.userImage} />
                {image ? (
                  <TouchableOpacity
                    style={styles.addUserImgBtn}
                    activeOpacity={0.8}
                  >
                    <Image
                      source={require("../assets/images/removeBtn.png")}
                      style={styles.addUserBtnImg}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.addUserImgBtn}
                    activeOpacity={0.7}
                  >
                    <Image
                      source={require("../assets/images/addBtn.png")}
                      style={styles.addUserBtnImg}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};
