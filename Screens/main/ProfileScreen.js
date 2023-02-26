import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import { styles } from "./styles/profileStyles.js";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bcg}
        source={require("../../assets/images/bcgimg.jpg")}
      >
        <View style={styles.content}>
          <View style={styles.imgBox}>
            <Image
              source={require("../../assets/images/userImg.jpg")}
              style={styles.userImage}
            />

            <TouchableOpacity
              style={{ ...styles.addUserImgBtn, borderColor: "#E8E8E8" }}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../assets/images/removeBtn.png")}
                style={styles.addUserBtnImg}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
