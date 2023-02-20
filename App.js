import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import {
  Text,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./styles";

const RobotoRegular = require("./assets/fonts/Roboto/Roboto-Regular.ttf");
const RobotoBold = require("./assets/fonts/Roboto/Roboto-Bold.ttf");

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegular,
    "Roboto-Bold": RobotoBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const dismissKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/images/bcgimg.jpg")}
          resizeMode="cover"
          style={styles.bcg}
        >
          <RegistrationScreen />

          {/* <StatusBar style="auto" /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from "react-native";

// export default function App() {
//   console.log(Platform.OS);
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

//   const keyboardHide = () => {
// setIsShowKeyboard(false);
// Keyboard.dismiss();
//   };

//   return (
//     <TouchableWithoutFeedback onPress={keyboardHide}>
//       <View style={styles.container}>
//         <ImageBackground
//           style={styles.image}
//           source={require("./assets/images/bcgimg.jpg")}
//         >
//           <KeyboardAvoidingView
//             behavior={Platform.OS == "ios" ? "padding" : "height"}
//           >
//             <View
//               style={{
//                 ...styles.form,
//                 marginBottom: isShowKeyboard ? 20 : 150,
//               }}
//             >
//               <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Hello again</Text>
//                 <Text style={styles.headerTitle}>Welcome back</Text>
//               </View>
//               <View>
//                 <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
//                 <TextInput
//                   style={styles.input}
//                   textAlign={"center"}
//                   onFocus={() => setIsShowKeyboard(true)}
//                 />
//               </View>
//               <View style={{ marginTop: 20 }}>
//                 <Text style={styles.inputTitle}>PASSWORD</Text>
//                 <TextInput
//                   style={styles.input}
//                   textAlign={"center"}
//                   secureTextEntry={true}
//                   onFocus={() => setIsShowKeyboard(true)}
//                 />
//               </View>
//               <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={styles.btn}
//                 onPress={keyboardHide}
//               >
//                 <Text style={styles.btnTitle}>SIGN IN</Text>
//               </TouchableOpacity>
//             </View>
//           </KeyboardAvoidingView>
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }
